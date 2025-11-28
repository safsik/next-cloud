import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Phoenix Fibre</div>
        <div className="space-x-4">
          <Link href="/dashboard" className="text-gray-300 hover:text-white">
            Dashboard
          </Link>
          <Link href="/dashboard/analytics" className="text-gray-300 hover:text-white">
            Analytics
          </Link>
          <Link href="/dashboard/devices" className="text-gray-300 hover:text-white">
            Devices
          </Link>
          <Link href="/dashboard/billing" className="text-gray-300 hover:text-white">
            Billing
          </Link>
          <Link href="/dashboard/settings" className="text-gray-300 hover:text-white">
            Settings
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;