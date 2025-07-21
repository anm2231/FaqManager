import './App.css';
import Home from './components/home/home';
import Admin from './components/Admin/Admin';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login';
import ProtectedRoute from './security/protectionRoute';
import { Routes, Route, useLocation } from 'react-router-dom';
import FakeLogin from './fakelogin';
import {AuthProvider} from './security/Authorization';
import FaqList from './components/FaqList/FaqList';
import AddFaq from './components/Admin/AddFaq';
import FaqAdminList from './components/Admin/FaqAdminList';
import BookmarkList from './components/BookmarkList';
import Register from './components/Register';
import AdminDashboard from './components/AdminDashboard';
import UsersList from './components/Admin/UsersList';
//import AdminStats from "./components/Admin/AdminStats";


function App() {
  const location = useLocation();

  // for hiding Navbar after login page
  const hideNavbar = location.pathname === "/login";
//agar location login hai toh ie. agar hidenavbar true hai toh display null, otherwise display karo navbar ko
  return (
    <AuthProvider>
      {hideNavbar?null : <Navbar/>}  {/* agar login page pe nahi hu toh navbar display hoga */}

      <Routes>
      <Route path="/login" element={<Login/>} />
         <Route path="/home" element={<Home />} /> 
         <Route path="/register" element={<Register/>} />
         <Route path="/Faq" element={<FaqList/>} />
        <Route path="/admin/add-faq" element={<ProtectedRoute role="ADMIN"><AddFaq/></ProtectedRoute>}/>
        <Route path="/admin/faqs" element={<ProtectedRoute role="ADMIN"><FaqAdminList/></ProtectedRoute>}/>
        <Route path="/bookmarks" element={<BookmarkList/>}/>
        <Route path="/admin" element={<ProtectedRoute role ="ADMIN"><AdminDashboard/></ProtectedRoute>} />
        <Route path="/admin/users" element={<ProtectedRoute role="ADMIN"><UsersList/></ProtectedRoute>} />

        <Route path="/" element={<Home />}/> {/* by default home display hoga */}

      </Routes>
    </AuthProvider>
  );
}

export default App;


