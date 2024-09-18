import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Cards from './components/Cards.jsx';

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Hero/>
        <Cards/>
      </Router>
    </>
  );
}

export default App;
