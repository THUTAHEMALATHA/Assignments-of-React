// src/components/Hero.jsx
import React from 'react';
import ResponsiveHeading from './ResponsiveHeading';
import ImageHover from './ImageHover';

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto mb-16 text-center">
      <ResponsiveHeading />
      <ImageHover />
      <p className="mt-8 text-lg text-gray-600 max-w-2xl mx-auto">
        Explore Tailwind CSS utilities with responsive design and hover effects.
      </p>
    </section>
  );
};

export default Hero;
