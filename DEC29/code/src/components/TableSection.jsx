// src/components/TableSection.jsx
import React from 'react';
import StyledTable from './StyledTable';

const TableSection = () => {
  return (
    <section id="table" className="max-w-4xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Data Table</h2>
      <StyledTable />
    </section>
  );
};

export default TableSection;
