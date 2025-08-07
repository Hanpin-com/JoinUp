import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { useGlobalContext } from '../context/GlobalState';

const sampleEvents = [
  { id: 1, title: 'Garage Sale', date: 'Aug 5', location: 'Maple St.', description: 'Lots of bargains!' },
  { id: 2, title: 'Art Fair', date: 'Aug 7', location: 'Main Plaza', description: 'Local artists & music.' },
  { id: 3, title: 'Food Truck Rally', date: 'Aug 12', location: 'Park Ave', category: 'food', description: ' Variety of foods from different countries! ' }
];

export default function EventDetails() {
  const { query } = useRouter();
  const event = sampleEvents.find(e => String(e.id) === query.id);
  if (!event) return null;

  return (
    <div>
      <Navbar />
      <main className="p-6 max-w-2xl mx-auto space-y-3">
        <h1 className="text-3xl font-bold">{event.title}</h1>
        <p>{event.date} · {event.location}</p>
        <p>{event.description}</p>
      </main>
      <Footer />
    </div>
  );
}
