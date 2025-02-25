import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

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
    details: 'Adopted',
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
    details: 'Specialty: Finding truffles',
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
    details: 'Adoption Status: Available',
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
    details: 'Color: Grey',
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
    details: 'Color: Green',
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
    details: 'Color: Rainbow',
    specialty: 'Talkative',
    weight: '2 lbs',
    greased: 'No',
    highestMedal: 'Champion Talker'
  },
];

const HomePage = () => {
  const [detailsVisible, setDetailsVisible] = useState({});
  const [showAdopt, setShowAdopt] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  const handleToggleDetails = (petName) => {
    setDetailsVisible((prev) => ({
      ...prev,
      [petName]: !prev[petName]
    }));
  };

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

  return (
    <div className="homepage">
      <h1>
        <FontAwesomeIcon icon={faHeart} className="heart-icon" /> Find Your Furry Soulmate <FontAwesomeIcon icon={faHeart} className="heart-icon" />
      </h1>
      <div className="homepage-gallery">
        {pets.map((pet, index) => (
          <div key={index} className="homepage-pet-card" onClick={() => handleToggleDetails(pet.name)}>
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
              <button
                className="homepage-details-button"
                onClick={(e) => { e.stopPropagation(); handleToggleDetails(pet.name); }}
              >
                {detailsVisible[pet.name] ? 'Hide Details' : 'Show Details'}
              </button>
            </div>
            {detailsVisible[pet.name] && (
              <div className="pet-details">
                <p>Specialty: {pet.specialty}</p>
                <p>Weight: {pet.weight}</p>
                <p>Greased: {pet.greased}</p>
                <p>Highest Medal: {pet.highestMedal}</p>
              </div>
            )}
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