import React from 'react';

const SettingsPage = () => {
  return (
    <div className="settings-container">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input type="text" id="username" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <div>
          <label htmlFor="notifications" className="block text-sm font-medium text-gray-700">Notifications</label>
          <select id="notifications" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
            <option value="enabled">Enabled</option>
            <option value="disabled">Disabled</option>
          </select>
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">Save Changes</button>
      </form>
    </div>
  );
};

export default SettingsPage;