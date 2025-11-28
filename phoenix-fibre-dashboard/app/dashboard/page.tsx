import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';

const DashboardPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <main className="p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p>Welcome to the Phoenix Fibre customer portal dashboard!</p>
          {/* Additional dashboard content can be added here */}
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;