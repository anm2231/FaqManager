import { useState} from "react";
import axios from "axios";
import './AddFaq.css';
import { Editor } from '@tinymce/tinymce-react';
const AddFaq=()=>{
    const [faq,setFaq]=useState({question:"",answer:"",category:"",tags:""}); //properties of a faq 

    const handleChange=(e)=>{   //updates the property that matches the input's name attribute[e.target.name] with the new value from the input(e.target.value).
    setFaq({...faq,[e.target.name]:e.target.value});
    };
    const handleEditorChange = (content) => {
  setFaq({ ...faq, answer: content });
};
    
   
const handleSubmit = (e) => {
  e.preventDefault();   //preventing page refresh
  const token = localStorage.getItem("token"); //we will retrieve token from the browser's local storage
  axios.post(   //to send data 
    "http://localhost:8080/FaQ",
    {
      ...faq,
      tags: faq.tags.split(",").map((t) => t.trim())  //to preprocess the tag before sending it to backend, tags will be split into array elements
    },
    {
      headers: {
        Authorization: `Bearer ${token}`  //we need this as only admin can add a new faq
      }
    }
  )
  .then(() => alert("FAQ added"))   
  .catch(err => console.error("Add FAQ failed:", err));
};
return (
    <div className="Admin-container"> 
        <h2>Add new FAQ</h2>
        <form className="add-faq-form" onSubmit={handleSubmit}>
      <input name="question" placeholder="Question" onChange={handleChange} required />
      <Editor
        apiKey="apim71lrrs6qtvc8e9j6elcrh6lf5kaj91yoele9wc2zf91c"
        value={faq.answer}
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
          placeholder: 'Write your answer here...'
        
        }}
        onEditorChange={handleEditorChange}
      />
      <input name="category" placeholder="Category" onChange={handleChange} />
      <input name="tags" placeholder="Comma-separated tags" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
    </div>
);
};
export default AddFaq;

