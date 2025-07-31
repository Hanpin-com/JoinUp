import Navbar from '../pages/components/Navbar';
import Footer from '../pages/components/Footer';
import { useGlobalContext } from '../pages/context/GlobalState';

export default function Profile() {
  const { rsvps } = useGlobalContext();

  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Your RSVPs</h1>
        {rsvps.length === 0 ? (
          <p>You haven't RSVPed to any events yet.</p>
        ) : (
          <ul className="space-y-2">
            {rsvps.map((event, idx) => (
              <li key={idx} className="border p-2 rounded">
                {event.title} - {event.date} @ {event.location}
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  );
}