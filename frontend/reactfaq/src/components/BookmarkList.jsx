import { useEffect, useState } from 'react';
import axios from 'axios';
import './BookmarkList.css';
const BookmarkList = () => {
  const [bookmarks, setBookmarks] = useState([]);

  const fetchBookmarks = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:8080/bookmarks', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBookmarks(res.data);
    } catch (error) {
      console.error("Error loading bookmarks:", error);
    }
  };

  useEffect(() => { fetchBookmarks(); }, []);

  const removeBookmark = async (faqId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8080/bookmarks/${faqId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchBookmarks(); // refresh list
    } catch (error) {
      console.error("Error removing bookmark:", error);
    }
  };

  return (
    <div className="bookmark-container">
      <h2>Your Bookmarked FAQs</h2>
      {bookmarks.length === 0 ? (
        <p>No bookmarks yet.</p>
      ) : (
        bookmarks.map((faq) => (
          <div className="bookmark-card" key={faq.id}>
            <h3>{faq.title || faq.question}</h3>
            <div dangerouslySetInnerHTML={{ __html: faq.description || faq.answer }} />
            <button onClick={() => removeBookmark(faq.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default BookmarkList;
