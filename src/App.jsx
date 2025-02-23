import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import Navbar from './components/Navbar';
import { PetList } from './components/PetList';
import { PetDetails } from "./components/PetDetails";
import { PetAdoptionForm } from "./components/PetAdoptionForm";
import PetFilter from './components/PetFilter';
import LiveChat from './components/LiveChat';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header />
        <PetFilter />
        <Routes>
          <Route path="/" element={<PetList />} />
          <Route path="/details/:id" element={<PetDetails />} />
          <Route path="/adoptions/:id" element={<PetAdoptionForm />} />
        </Routes>
        <LiveChat />
      </Router>
    </div>
  );
}

export default App;
