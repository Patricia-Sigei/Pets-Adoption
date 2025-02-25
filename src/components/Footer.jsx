import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    const location = useLocation();

    // Show the footer only on the About Us page
    if (location.pathname !== "/about") return null;

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Contact Section */}
                <div className="footer-section">
                    <h5>Contact Us</h5>
                    <p><FontAwesomeIcon icon={faPhoneAlt} /> +254 700 123 456</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> adopt@petadoptionagency.com</p>
                </div>

                {/* Adoption Information */}
                <div className="footer-section">
                    <h5>Adoption Info</h5>
                    <ul>
                        <li><a href="#">Why Adopt?</a></li>
                        <li><a href="#">Adoption Process</a></li>
                        <li><a href="#">Available Pets</a></li>
                        <li><a href="#">Success Stories</a></li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div className="footer-section">
                    <h5>Newsletter</h5>
                    <p>Subscribe for pet adoption updates.</p>
                    <form className="newsletter-form">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>

                {/* Our Socials Section */}
                <div className="footer-socials">
                    <h5>Our Socials</h5>
                    <div className="social-icons">
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Pet Adoption Agency. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
