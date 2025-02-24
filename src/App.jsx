import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero'; 
import HomePage from './components/HomePage'; 
import SearchPage from "./components/SearchPage"; 
import ErrorBoundary from "./components/ErrorBoundary"; 
import LiveChat from './components/LiveChat';
import SearchAndDisplayPets from './components/Display'; 
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <ErrorBoundary>
          <Header/>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Hero />} /> {/* Landing Page */}
            <Route path="/catalogue" element={<HomePage />} /> {/* Catalogue Page */}
            <Route path="/search" element={<SearchPage />} /> {/* Search Page */}
            <Route path="/search-and-display" element={<SearchAndDisplayPets />} /> {/* Search and Display Pets */}
          </Routes>
          
          <LiveChat />
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;