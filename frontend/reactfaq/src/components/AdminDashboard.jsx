// import { Link } from 'react-router-dom';
// import './AdminDashboard.css';
// const AdminDashboard = () => {
//   return (
//     <div className="Admin-container">
//       <h2>Admin Dashboard</h2>
//       <ul className="Admin-links">
//         <li><Link to="/admin/add-faq">Add FAQ</Link></li>
//         <li><Link to="/admin/faqs">Manage FAQs</Link></li>
//         <li><Link to="/admin/users">View Users</Link></li>
//       </ul>
//     </div>
//   );
// };

// export default AdminDashboard;
// // This component serves as a dashboard for admin functionalities, providing links to add FAQs, manage FAQs, view statistics, and top searches.

import './AdminDashboard.css';
import {Link} from 'react-router-dom';
const AdminDashboard = () => {
  return (
    <div className="admin-container">
      <section className="admin-hero-section">
        <div className="admin-hero-content">
          <h1 className="admin-hero-title">
            Admin Dashboard
            <span className="admin-hero-gradient">Manage FAQs & Users</span>
          </h1>
          <p className="admin-hero-subtitle">
            Welcome, Admin! Here you can add new FAQs, manage existing ones, and view users.
          </p>
          <div className="admin-hero-buttons">
            <Link to="/admin/add-faq" className="admin-btn-primary">Add FAQ</Link>
            <Link to="/admin/faqs" className="admin-btn-outline">Manage FAQs</Link>
            <Link to="/admin/users" className="admin-btn-outline">View Users</Link>
          </div>
        </div>
      </section>
      <section className="admin-features-grid">
        <div className="admin-feature-card">
          <div className="admin-feature-icon">📝</div>
          <div className="admin-feature-title">Add FAQ</div>
          <div className="admin-feature-description">Create new questions and answers for your knowledge base.</div>
        </div>
        <div className="admin-feature-card">
          <div className="admin-feature-icon">🛠️</div>
          <div className="admin-feature-title">Manage FAQs</div>
          <div className="admin-feature-description">Edit or delete existing FAQs to keep information up to date.</div>
        </div>
        <div className="admin-feature-card">
          <div className="admin-feature-icon">👥</div>
          <div className="admin-feature-title">View Users</div>
          <div className="admin-feature-description">See all registered users and manage their access.</div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;