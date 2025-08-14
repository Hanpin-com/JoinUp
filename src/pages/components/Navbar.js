import Link from 'next/link';
import { useAuth } from '../context/AuthContect'; 

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <div className="text-xl font-bold">JoinUp</div>
      <div className="space-x-4 flex items-center">
        <Link href="/">Home</Link>
        <Link href="/events">Events</Link>
        {user && <Link href="/profile">Profile</Link>}
        {user ? (
          <>
            <span className="hidden sm:inline text-sm text-gray-200">
              Hi, {user.email}
            </span>
            <button
              onClick={logout}
              className="ml-2 bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

