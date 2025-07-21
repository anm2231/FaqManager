import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';
const Register = () => {
  const [form, setForm] = useState({ username: '', password: '', email: '' ,role: 'USER' });
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/auth/register', form);
      setSuccess(true);
      setTimeout(() => navigate("/login"), 1000);
    } catch (err) {
      alert("Registration failed");
      console.error(err);
    }
  };

  return (
    <div className='register-container'>
      <h2>Register</h2>
      {success ? <p>Registered successfully! Redirecting...</p> : (
        <form className='register-form' onSubmit={handleSubmit}>
          <label>Username:</label><br />
          <input name="username" onChange={handleChange} required /><br /><br />
          
          <label>Email:</label><br />
          <input name="email" onChange={handleChange} required /><br /><br />

<label>Role:</label>
<select name="role" value={form.role} onChange={handleChange} required>
  <option value="USER">User</option>
  <option value="ADMIN">Admin</option>
</select>
          <br /><br />
          <label>Password:</label><br />
          <input name="password" type="password" onChange={handleChange} required /><br /><br />

          <button type="submit">Register</button>
        </form>
      )}
      <br />
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Register;
