import React from 'react';

const StyledTable = () => {
  return (
    <div className="overflow-x-auto max-w-4xl mx-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Role</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-gray-50 transition-colors even:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">John Doe</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">john@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Developer</td>
          </tr>
          <tr className="hover:bg-gray-50 transition-colors even:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Jane Smith</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">jane@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Designer</td>
          </tr>
          <tr className="hover:bg-gray-50 transition-colors even:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Bob Wilson</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">bob@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Manager</td>
          </tr>
          <tr className="hover:bg-gray-50 transition-colors even:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Alice Green</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">alice@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Tester</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StyledTable;
