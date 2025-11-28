import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <Topbar />
          <h1 className="text-2xl font-bold">Welcome to the Phoenix Fibre Dashboard</h1>
          <p className="mt-4">This is your customer portal where you can manage your account, view analytics, and more.</p>
        </main>
      </div>
    </div>
  );
}