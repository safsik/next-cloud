import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Phoenix Fibre Dashboard</h2>
      <ul>
        <li>
          <Link href="/dashboard/analytics">Analytics</Link>
        </li>
        <li>
          <Link href="/dashboard/devices">Devices</Link>
        </li>
        <li>
          <Link href="/dashboard/billing">Billing</Link>
        </li>
        <li>
          <Link href="/dashboard/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;