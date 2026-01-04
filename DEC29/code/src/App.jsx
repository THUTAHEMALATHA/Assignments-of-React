// src/App.jsx
import React from 'react';
import "./index.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TableSection from './components/TableSection';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <Navbar />
      <Hero />
      <Features />
      <TableSection />
      <ContactForm />
    </div>
  );
}

export default App;
