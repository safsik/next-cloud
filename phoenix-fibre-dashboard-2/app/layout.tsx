import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import './styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Phoenix Fibre Dashboard</title>
      </head>
      <body>
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Topbar />
            <main>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}