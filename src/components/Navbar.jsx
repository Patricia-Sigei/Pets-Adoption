import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { FaHome, FaSearch, FaUser, FaPaw } from 'react-icons/fa'; // Added FaPaw for "Our Pets"

// AuthModal Component
const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        {isLogin ? (
          <div className="login-form">
            <h2>Login</h2>
            <form>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Login</button>
            </form>
            <p>
              Don't have an account? <span onClick={toggleForm}>Sign up</span>
            </p>
          </div>
        ) : (
          <div className="signup-form">
            <h2>Sign Up</h2>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Sign Up</button>
            </form>
            <p>
              Already have an account? <span onClick={toggleForm}>Login</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <span className="logo">🐾</span>
        <span className="brand-name">Pet Adoption Agency</span>
        <div className="nav-links">
          <div className="nav-item">
            <Link to="/"> {/* Link to Home */}
              <FaHome className="nav-icon" />
              <span className="nav-label">Home</span>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/catalogue"> {/* Link to Catalogue */}
              <FaPaw className="nav-icon" />
              <span className="nav-label">Catalogue</span>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/search"> {/* Link to Search Page */}
              <FaSearch className="nav-icon" />
              <span className="nav-label">Search</span>
            </Link>
          </div>
        </div>
        <div className="login-item" onClick={openModal}>
          <FaUser className="nav-icon" />
          <span className="nav-label">Login</span>
        </div>
      </div>
      {isModalOpen && <AuthModal onClose={closeModal} />}
    </nav>
  );
};

export default Navbar;