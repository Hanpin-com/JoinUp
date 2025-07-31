import Navbar from '../pages/components/Navbar';
import Footer from '../pages/components/Footer';
import EventCard from '../pages/components/EventCard';
import { useGlobalContext } from '../pages/context/GlobalState';

export default function Events() {
  const { rsvps, setRsvps } = useGlobalContext();

  const sampleEvents = [
    { id: 1, title: 'Garage Sale', date: 'Aug 5', location: 'Maple St.' },
    { id: 2, title: 'Art Fair', date: 'Aug 7', location: 'Main Plaza' }
  ];

  const handleRsvp = (event) => {
    setRsvps([...rsvps, event]);
  };

  return (
    <div>
      <Navbar />
      <main className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {sampleEvents.map(event => (
          <EventCard 
            key={event.id} 
            {...event} 
            onRsvp={() => handleRsvp(event)} 
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}
