

import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to Your
            <span className="hero-gradient">Knowledge Hub</span>
          </h1>
          
          <h2 className="hero-subtitle">
            Please login or register to see additional options and unlock the full potential of our platform
          </h2>
          
          <p className="hero-description">
            Explore our comprehensive Internal Knowledge Base and discover valuable insights
          </p>
          
          <div className="hero-buttons">
            {/* <button className="btn-primary">
              Get Started
              <span className="arrow">→</span>
            </button>
            <button className="btn-outline">
              Learn More
            </button> */}
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              📚
            </div>
            <h3 className="feature-title">Knowledge Base</h3>
            <p className="feature-description">
              Access our comprehensive collection of articles, guides, and documentation to find the answers you need.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              👥
            </div>
            <h3 className="feature-title">Community Support</h3>
            <p className="feature-description">
              Connect with our community of experts and get help from fellow users who share your challenges.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              🛡️
            </div>
            <h3 className="feature-title">Secure Access</h3>
            <p className="feature-description">
              Your data is protected with enterprise-grade security. Login to access personalized content and features.
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Home;