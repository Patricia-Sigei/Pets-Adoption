import React from 'react';
import '../App.css'; // Ensure this path is correct

// Import images directly
import catImage from '../assets/images/cat.jpeg';
import dogImage from '../assets/images/dog.webp';
import germanShepherdImage from '../assets/images/germanshepherd.jpg';
import rabbitImage from '../assets/images/rabbit.jpg';
import turtleImage from '../assets/images/turtle.jpg';
import parrotImage from '../assets/images/parrot.jpg';
import hamsterImage from '../assets/images/hamster.jpg';

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to the Pet Adoption Agency!</h1>
      <p>Go ahead and sign up to adopt your pet today, or use our search to find your perfect match first!</p>
      <div className="gallery">
        <img src={catImage} alt="Cat" />
        <img src={dogImage} alt="Dog" />
        <img src={germanShepherdImage} alt="German Shepherd" />
        <img src={rabbitImage} alt="Rabbit" />
        <img src={turtleImage} alt="Turtle" />
        <img src={parrotImage} alt="Parrot" />
        <img src={hamsterImage} alt="Hamster" />
      </div>
    </div>
  );
};

export default HomePage;