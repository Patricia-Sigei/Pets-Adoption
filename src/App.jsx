import React, { useRef } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero'; 
import HomePage from './components/HomePage'; 
import AboutUs from './components/AboutUs'; 
import Footer from './components/Footer';
import SearchPage from "./components/SearchPage"; 
import ErrorBoundary from "./components/ErrorBoundary"; 
import LiveChat from './components/LiveChat';
import SearchAndDisplayPets from './components/Display'; 
import Header from './components/Header';

const Home = ({ scrollToSection }) => {
  const aboutRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero scrollToAbout={scrollToAbout} />
      <HomePage />
      <div ref={aboutRef}>
        <AboutUs />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <ErrorBoundary>
          <Header />
          <Navbar />
          
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            /> {/* Home with Hero, HomePage, About, Footer */}
            <Route path="/catalogue" element={<HomePage />} /> {/* Catalogue Page */}
            <Route path="/search" element={<SearchPage />} /> {/* Search Page */}
            <Route path="/search-and-display" element={<SearchAndDisplayPets />} /> {/* Search and Display Pets */}
            <Route path="/about" element={<AboutUs />} /> {/* About Us as its own page */}
          </Routes>
          
          <LiveChat />
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;