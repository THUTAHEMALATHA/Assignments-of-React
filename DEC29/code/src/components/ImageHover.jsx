import React from 'react';

const ImageHover = () => {
  return (
    <div className="w-64 h-64 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 mx-auto">
      <img 
        src="https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=Hover+Me" 
        alt="Hover effect" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ImageHover;
