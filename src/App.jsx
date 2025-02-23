import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import SearchPage from "./components/SearchPage"; // New SearchPage component
import ErrorBoundary from "./components/ErrorBoundary"; // ErrorBoundary component
import { PetList } from './components/PetList';
import { PetDetails } from "./components/PetDetails";
import { PetAdoptionForm } from "./components/PetAdoptionForm";
import LiveChat from './components/LiveChat';

function App() {
  return (
    <div className="App">
      <Router>
        <ErrorBoundary>
          <Navbar />
          
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} /> {/* Route for SearchPage */}
            <Route path="/pets" element={<PetList />} />
            <Route path="/details/:id" element={<PetDetails />} />
            <Route path="/adoptions/:id" element={<PetAdoptionForm />} />
          </Routes>
          
          
          <LiveChat />
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;