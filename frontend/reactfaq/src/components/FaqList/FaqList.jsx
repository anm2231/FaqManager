import { useEffect, useState } from 'react';
import axios from 'axios';
import './FaqList.css';

const FaqList = () => {
  const [faqs, setFaqs] = useState([]); // store all fetched FAQs
  const [search, setSearch] = useState(""); // search query
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:8080/FaQ/all', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      setFaqs(response.data);
    })
    .catch(error => {
      console.error("Error fetching FAQs:", error);
    });
  }, []);

  // Search handler
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get('http://localhost:8080/FaQ/search', {
        params: { q: search },
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setFaqs(response.data);
    } catch (error) {
      console.error("Error searching FAQs:", error);
    }
    setLoading(false);
  };

  // Function bookmark a FAQ 
  const bookmarkFaq = async (faqId) => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(`http://localhost:8080/bookmarks/${faqId}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert("Bookmarked!");
    } catch (error) {
      console.error("Error bookmarking:", error);
      alert("Bookmark failed.");
    }
  };

  return (
    <div className='FaqList-container'>
      <h2>Frequently Asked Questions</h2>
      <form onSubmit={handleSearch} style={{ marginBottom: "2rem", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Search FAQs by question/title..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ padding: "0.7rem", width: "60%", borderRadius: "8px", border: "1px solid #b2c4a4" }}
        />
        <button type="submit" style={{ marginLeft: "1rem", padding: "0.7rem 1.2rem", borderRadius: "8px", background: "#222", color: "#fff", border: "none", fontWeight: "600" }}>
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {faqs.length === 0 && !loading && <p>No FAQs found.</p>}
      {faqs.map(faq => (
  <div key={faq.id} className='faq-card'>
    <h3>{faq.question}</h3>
    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
    <button onClick={() => bookmarkFaq(faq.id)}>Bookmark</button>
  </div>
))}
    </div>
  );
};

export default FaqList;   