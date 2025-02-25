import React, { useState } from 'react';
import '../App.css';
import BookingModal from './BookingPet';

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
      <div className="hero-text">
        <h1 className="hero-title">Welcome to Pet Adoption Agency Where Love Finds a Home!</h1>
        <button className="btn" onClick={openModal}>Book Now</button>
      </div>
      {isModalOpen && <BookingModal onClose={closeModal} />}
    </div>
  );
};

export default Hero;