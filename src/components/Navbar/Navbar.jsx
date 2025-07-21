import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleProtectedClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      alert("Please login/register to see and edit FAQs and Bookmarks.");
    }
  };

  return (
    <nav className="Navbar">
      <h1>FAQ MANAGER</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        {isLoggedIn && (
          <>
            <li><Link to="/faq" onClick={handleProtectedClick}>FAQs</Link></li>
            <li><Link to="/admin" onClick={handleProtectedClick}>Admin</Link></li>
            <li><Link to="/bookmarks" onClick={handleProtectedClick}>Bookmarks</Link></li>
          </>
        )}
        {!isLoggedIn && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;