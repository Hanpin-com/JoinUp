import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <div className="text-xl font-bold">JoinUp</div>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/events">Events</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </nav>
  );
}
