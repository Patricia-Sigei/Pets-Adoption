import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero'; 
import AboutUs from './components/AboutUs'; 
import Footer from './components/Footer';
import HomePage from './components/HomePage'; 
import SearchPage from "./components/SearchPage"; 
import ErrorBoundary from "./components/ErrorBoundary"; 
import LiveChat from './components/LiveChat';
import SearchAndDisplayPets from './components/Display'; 
import Header from './components/Header';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Footer />
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
            <Route path="/" element={<Home />} /> {/* Home with Hero, About, Footer */}
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
