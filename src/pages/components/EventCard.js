import Link from 'next/link';
import { useGlobalContext } from '../context/GlobalState';

export default function EventCard({ id, title, date, location }) {
  const { rsvps, addRsvp, removeRsvp } = useGlobalContext();

  const isGoing = rsvps.some(e => e.id === id);

  const handleClick = () => {
    if (isGoing) {
      removeRsvp(id);
    } else {
      addRsvp({ id, title, date, location });
    }
  };

  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-1">{title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400">{date} · {location}</p>

      {/* RSVP Button */}
      <button
        onClick={handleClick}
        className={`mt-3 px-4 py-1 rounded text-white transition-colors 
          ${isGoing ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-500 hover:bg-blue-600'}
        `}
      >
        {isGoing ? 'RSVPed' : 'RSVP'}
      </button>

      {/* Link to event details page */}
      <div className="mt-2">
        <Link
          href={`/events/${id}`}
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          View details
        </Link>
      </div>
    </div>
  );
}
