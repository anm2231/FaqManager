import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';
import './FaqAdminList.css';
const FaqAdminList = () => {
  const [faqs, setFaqs] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const token = localStorage.getItem("token");

  const fetchFaqs = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:8080/FaQ/all", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setFaqs(res.data);
    } catch (err) {
      console.error("Error fetching FAQs:", err);
    }
  }, [token]);

  useEffect(() => {
    fetchFaqs();
  }, [fetchFaqs]);

  const deleteFaq = async (id) => {
    if (!window.confirm("Delete this FAQ?")) return;
    try {
      await axios.delete(`http://localhost:8080/FaQ/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setFaqs(faqs.filter(faq => faq.id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete FAQ.");
    }
  };

  const startEditing = (faq) => {
    setEditingId(faq.id);
    setEditForm({ ...faq, tags: faq.tags.join(', ') });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditForm({});
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const saveEdit = async () => {
    try {
      const updatedFaq = {
        ...editForm,
        tags: editForm.tags.split(',').map(t => t.trim())
      };

      await axios.put(`http://localhost:8080/FaQ/${editingId}`, updatedFaq, {
        headers: { Authorization: `Bearer ${token}` }
      });

      await fetchFaqs();
      cancelEditing();
    } catch (err) {
      console.error("Update failed:", err);
      alert("Failed to update FAQ.");
    }
  };

  return (
    <div className='FaqAdminList-container'>
      <h2>Manage FAQs</h2>
      {faqs.map(faq => (
        <div key={faq.id} className='faq-admin-card'>
          {editingId === faq.id ? (
            <>
              <input name="question" value={editForm.question} onChange={handleEditChange} /><br />
                  <Editor
      apiKey="YOUR_TINYMCE_API_KEY"
      value={editForm.answer}
      init={{
        height: 200,
        menubar: false,
        plugins: [
          'advlist autolink lists link charmap preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help',
        placeholder: 'Edit your answer here...'
      }}
      onEditorChange={content => setEditForm({ ...editForm, answer: content })}
    /><br />
    <input name="category" value={editForm.category} onChange={handleEditChange} /><br />
    <input name="tags" value={editForm.tags} onChange={handleEditChange} /><br />
    <button onClick={saveEdit}>Save</button>
    <button onClick={cancelEditing}>Cancel</button>
  </>
          ) : (
            <>
              <h3>{faq.question}</h3>
              <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
              <small>Category: {faq.category}</small><br />
              <small>Tags: {faq.tags.join(', ')}</small><br />
              <button onClick={() => startEditing(faq)}>Edit</button>
              <button onClick={() => deleteFaq(faq.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqAdminList;
