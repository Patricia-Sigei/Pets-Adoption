import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h5>Contact Us</h5>
                    <p><FontAwesomeIcon icon={faPhoneAlt} /> 401-234-5678</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> adopt@petadoptionagency.com</p>
                </div>

                <div className="footer-section">
                    <h5>Adoption Info</h5>
                    <ul>
                        <li><a href="#">Why Adopt?</a></li>
                        <li><a href="#">Adoption Process</a></li>
                        <li><a href="#">Available Pets</a></li>
                        <li><a href="#">Success Stories</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h5>Newsletter</h5>
                    <p>Subscribe for pet adoption updates.</p>
                    <form className="newsletter-form">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p style={{ color: '#fff' }}>&copy; {new Date().getFullYear()} Pet Adoption Agency. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;