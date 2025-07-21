
import { useContext } from "react";
import { AuthContext,AuthProvider } from "./security/Authorization";
import { useNavigate } from "react-router-dom";

const FakeLogin = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (role) => {
    setUser({ username: role, role });
    navigate(role === 'admin' ? '/admin' : '/home');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Fake Login Page</h2>
      <button onClick={() => handleLogin('admin')}>Login as Admin</button>
      <br/><br/>
      <button onClick={() => handleLogin('user')}>Login as User</button>
    </div>
  );
};

export default FakeLogin;