import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaHome, FaSearch, FaUser } from 'react-icons/fa'; // Importing icons from react-icons

const Navbar = () => {
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
            <Link to="/search"> {/* Link to Search Page */}
              <FaSearch className="nav-icon" />
              <span className="nav-label">Search</span>
            </Link>
          </div>
        </div>
        <div className="login-item">
          <FaUser className="nav-icon" />
          <span className="nav-label">Login</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;