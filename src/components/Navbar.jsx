import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { FaHome, FaSearch, FaUser, FaPaw } from 'react-icons/fa'; // Added FaPaw for "Our Pets"

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
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}> {/* Remove link styling */}
              <FaHome className="nav-icon" />
              <span className="nav-label">Home</span>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/catalogue" style={{ textDecoration: 'none', color: 'white' }}> {/* Remove link styling */}
              <FaPaw className="nav-icon" />
              <span className="nav-label">Catalogue</span>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/search" style={{ textDecoration: 'none', color: 'white' }}> {/* Remove link styling */}
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