import React, { useState } from 'react';
import '../App.css';
import BookingModal from './BookingPet'; 
import mainImage from '../assets/images/homepg.jpg'; 

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="hero">
      <img src={mainImage} alt="Dog Adoption" className="hero-image" />
      <div className="hero-text">
        <h1 className="hero-title"> Adopt a Pet and Get a Lifetime Companion</h1>
       
        <button className="btn" onClick={openModal}>Adopt Now</button>
      </div>
      {isModalOpen && <BookingModal onClose={closeModal} />}
    </div>
  );
};

export default Hero;