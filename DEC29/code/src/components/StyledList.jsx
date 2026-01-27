import React from 'react';

const StyledList = () => {
  return (
    <ul className="pl-5 space-y-2 max-w-md mx-auto">
      <li className="list-disc list-inside text-gray-700 hover:text-blue-600 transition-colors cursor-pointer py-1">
        First item with hover
      </li>
      <li className="list-disc list-inside text-gray-700 hover:text-blue-600 transition-colors cursor-pointer py-1">
        Second item
      </li>
      <li className="list-disc list-inside text-gray-700 hover:text-blue-600 transition-colors cursor-pointer py-1">
        Third item
      </li>
    </ul>
  );
};

export default StyledList;
