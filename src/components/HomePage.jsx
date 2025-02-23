import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'; // Import the heart icon
import '../App.css';

// Import images directly
import catImage from '../assets/images/cat.jpeg';
import dogImage from '../assets/images/dog.webp';
import germanShepherdImage from '../assets/images/germanshepherd.jpg';
import rabbitImage from '../assets/images/rabbit.jpg';
import turtleImage from '../assets/images/turtle.jpg';
import parrotImage from '../assets/images/parrot.jpg';

const pets = [
  { name: 'Amuki', type: 'Dog', image: dogImage, available: false, details: 'Adopted' },
  { name: 'Muimui', type: 'Dog', image: catImage, available: true, details: 'Specialty: Finding truffles' },
  { name: 'Snow', type: 'Golden Retriever', image: germanShepherdImage, available: true, details: 'Adoption Status: Available' },
  { name: 'Bunny', type: 'Rabbit', image: rabbitImage, available: true, details: 'Color: Grey' },
  { name: 'Shelly', type: 'Turtle', image: turtleImage, available: true, details: 'Color: Green' },
  { name: 'Polly', type: 'Parrot', image: parrotImage, available: true, details: 'Color: Rainbow' },
];

const HomePage = () => {
  const [showAdopt, setShowAdopt] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  const handleAdoptClick = (pet) => {
    if (pet.available) {
      setShowAdopt(true);
      setSelectedPet(pet);
    } else {
      alert(`${pet.name} has already found their forever home. 🏡`);
    }
  };

  const handleSeeMore = (pet) => {
    alert(`Meet ${pet.name}!\n\n${pet.details}\n\nCould this be your new best friend?`);
  };

  const handleClose = () => {
    setShowAdopt(false);
    setSelectedPet(null);
  };

  return (
    <div className="homepage">
      <h1>
        <FontAwesomeIcon icon={faHeart} className="heart-icon" /> Find Your Furry Soulmate <FontAwesomeIcon icon={faHeart} className="heart-icon" />
      </h1>
      <div className="homepage-gallery">
        {pets.map((pet, index) => (
          <div key={index} className="homepage-pet-card">
            <img src={pet.image} alt={pet.name} className="homepage-pet-image" />
            <h2>{pet.name}</h2>
            <div className="button-container">
              {pet.available ? (
                <button className="homepage-adopt-button" onClick={() => handleAdoptClick(pet)}>
                  Adopt Me
                </button>
              ) : (
                <button className="homepage-adopt-button" disabled>
                  Adopted
                </button>
              )}
              <button className="homepage-details-button" onClick={() => handleSeeMore(pet)}>
                See More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Sign Up/Login Modal */}
      {showAdopt && selectedPet && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>&times;</span>
            <h2>Ready to Welcome {selectedPet.name} into Your Life?</h2>
            <p>
              Adopting {selectedPet.name} is just a few steps away! Sign up or log in to start the adoption process and bring home your new best friend.
            </p>
            <button className="homepage-adopt-button">Sign Up</button>
            <button className="homepage-adopt-button">Login</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;