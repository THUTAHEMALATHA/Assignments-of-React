import React from 'react';

const Card = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm hover:shadow-2xl transition-all duration-300">
      <img 
        src="https://via.placeholder.com/300x200/10B981/FFFFFF?text=Card+Image" 
        alt="Card image" 
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold text-gray-900 mb-2">Card Title</h3>
      <p className="text-gray-600 mb-4">Sample description text for the card component.</p>
      <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
        Learn More
      </button>
    </div>
  );
};

export default Card;
