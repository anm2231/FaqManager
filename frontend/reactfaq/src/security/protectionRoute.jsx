import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Authorization";

const ProtectedRoute = ({ children, role }) => {
  const { user } = useContext(AuthContext);

  console.log(" ProtectedRoute - user:", user);  
  console.log(" Expected role:", role);          

  if (!user || user.role !== role) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default ProtectedRoute;
// This component checks if the user is authenticated and has the required role.
// If not, it redirects to the login page. If the user is authenticated and has the correct role, it renders the children components.
