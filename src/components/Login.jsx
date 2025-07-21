
import { useRef, useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../security/Authorization';

const Login = () => {
  const userRef = useRef();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [error, setError] = useState('');

  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');

  try {
    const response = await axios.post("http://localhost:8080/auth/login", { username, password });
    const { token, role } = response.data;

    localStorage.setItem("token", token);
    setUser({ username, role });
    setLoginSuccess(true); //  set success

    
    setTimeout(() => {
      navigate(role === "ADMIN" ? "/admin" : "/home");
    }, 100); 
  } catch (err) {
    console.error(err);
    setError("Login failed. Check your credentials.");
  }
};


  return (
    <>
      {loginSuccess ? (
        <div>
          <h1>Login Successful</h1>
          <p><Link to="/home">Go to Home</Link></p>
        </div>
      ) : (
        <div>
          <h1>Sign in</h1>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input
              type="text"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
            <br /><br />
            <label>Password:</label>
            <input
              type="password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <br />
            <button type="submit">Sign in</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;