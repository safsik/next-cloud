import React from 'react';

const Topbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow">
      <h1 className="text-xl font-bold">Phoenix Fibre Dashboard</h1>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-800">Notifications</button>
        <button className="text-gray-600 hover:text-gray-800">Profile</button>
        <button className="text-gray-600 hover:text-gray-800">Logout</button>
      </div>
    </div>
  );
};

export default Topbar;