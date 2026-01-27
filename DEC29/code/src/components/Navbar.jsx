// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12 bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg">
      <h1 className="text-2xl font-bold text-gray-900">Tailwind Demo</h1>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#features" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50">
          Features
        </a>
        <a href="#table" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50">
          Table
        </a>
        <a href="#contact" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
