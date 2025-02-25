import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

// Import components
import Hero from './Hero';
import AboutUs from './AboutUs';
import Footer from './Footer';

// Import images directly
import catImage from '../assets/images/cat.jpeg';
import dogImage from '../assets/images/dog.webp';
import germanShepherdImage from '../assets/images/germanshepherd.jpg';
import rabbitImage from '../assets/images/rabbit.jpg';
import turtleImage from '../assets/images/turtle.jpg';
import parrotImage from '../assets/images/parrot.jpg';

const pets = [
  { 
    name: 'Amuki', 
    type: 'Dog', 
    image: dogImage, 
    available: false, 
    specialty: 'Babysitting',
    weight: '30 lbs',
    greased: 'Yes',
    highestMedal: 'Gold Medal'
  },
  { 
    name: 'Muimui', 
    type: 'Dog', 
    image: catImage, 
    available: true, 
    specialty: 'Truffle Hunter',
    weight: '25 lbs',
    greased: 'No',
    highestMedal: 'Silver Medal'
  },
  { 
    name: 'Snow', 
    type: 'Golden Retriever', 
    image: germanShepherdImage, 
    available: true, 
    specialty: 'Helper Dog',
    weight: '65 lbs',
    greased: 'No',
    highestMedal: 'Bronze Medal'
  },
  { 
    name: 'Bunny', 
    type: 'Rabbit', 
    image: rabbitImage, 
    available: true, 
    specialty: 'Bunny Hop',
    weight: '5 lbs',
    greased: 'No',
    highestMedal: 'None'
  },
  { 
    name: 'Shelly', 
    type: 'Turtle', 
    image: turtleImage, 
    available: true, 
    specialty: 'Slow and Steady',
    weight: '10 lbs',
    greased: 'No',
    highestMedal: 'Participation Medal'
  },
  { 
    name: 'Polly', 
    type: 'Parrot', 
    image: parrotImage, 
    available: true, 
    specialty: 'Talkative',
    weight: '2 lbs',
    greased: 'No',
    highestMedal: 'Champion Talker'
  },
];

const HomePage = () => {
  const [showAdopt, setShowAdopt] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const petsPerPage = 6; // Number of pets per page

  const handleAdoptClick = (pet) => {
    if (pet.available) {
      setShowAdopt(true);
      setSelectedPet(pet);
    } else {
      alert(`${pet.name} has already found their forever home. 🏡`);
    }
  };

  const handleClose = () => {
    setShowAdopt(false);
    setSelectedPet(null);
  };

  const maxPage = Math.ceil(pets.length / petsPerPage);

  return (
    <div className="homepage">
      <Hero />
      <h1>
        <FontAwesomeIcon icon={faHeart} className="heart-icon" /> Find Your Furry Soulmate <FontAwesomeIcon icon={faHeart} className="heart-icon" />
      </h1>
      <h2>Catalogue</h2>
      <div className="homepage-gallery">
        {pets.slice(currentPage * petsPerPage, (currentPage + 1) * petsPerPage).map((pet, index) => (
          <div key={index} className="homepage-pet-card">
            <img src={pet.image} alt={pet.name} className="homepage-pet-image" />
            <h2>{pet.name}</h2>
            <div className="button-container">
              {pet.available ? (
                <button className="adopt-button" onClick={() => handleAdoptClick(pet)}>
                  Adopt Me
                </button>
              ) : (
                <button className="adopt-button" disabled>
                  Adopted
                </button>
              )}
            </div>
            <div className="pet-details">
              <p>Specialty: {pet.specialty}</p>
              <p>Weight: {pet.weight}</p>
              <p>Greased: {pet.greased}</p>
              <p>Highest Medal: {pet.highestMedal}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button 
          disabled={currentPage === 0} 
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          &lt; Previous
        </button>
        <span>Page {currentPage + 1} of {maxPage}</span>
        <button 
          disabled={currentPage === maxPage - 1} 
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next &gt;
        </button>
      </div>

      {/* About Us Section */}
      <AboutUs />

      {/* Footer Section */}
      <Footer />

      {/* Sign Up/Login Modal */}
      {showAdopt && selectedPet && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>&times;</span>
            <h2>Ready to Welcome {selectedPet.name} into Your Life?</h2>
            <p>
              Adopting {selectedPet.name} is just a few steps away! Sign up or log in to start the adoption process and bring home your new best friend.
            </p>
            <button className="modal-button">Sign Up</button>
            <button className="modal-button">Login</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;