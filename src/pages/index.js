import Navbar from '../pages/components/Navbar';
import Footer from '../pages/components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to JoinUp!</h1>
        <p>Find and share local events in your community.</p>
      </main>
      <Footer />
    </div>
  );
}