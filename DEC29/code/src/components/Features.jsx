// src/components/Features.jsx
import React from 'react';
import Card from './Card';
import TailwindButton from './TailwindButton';
import StyledList from './StyledList';

const Features = () => {
  return (
    <section id="features" className="max-w-6xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex flex-wrap justify-center gap-8 items-center">
        <TailwindButton />
        <StyledList />
      </div>
    </section>
  );
};

export default Features;
