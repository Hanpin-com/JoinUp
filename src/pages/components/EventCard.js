import { useAuth } from "../context/AuthContect";
import { useGlobalContext } from "../context/GlobalState";

export default function EventCard({ id, title, date, location, category, onDelete }) {
  const { user } = useAuth() || {};
  const { addRsvp, removeRsvp, rsvps } = useGlobalContext() || { rsvps: [], addRsvp: () => {}, removeRsvp: () => {} };

  const isGoing = rsvps.some((e) => e.id === id);

  const toggleRsvp = () => {
    if (isGoing) removeRsvp(id);
    else addRsvp({ id, title, date, location, category });
  };

  return (
    <div className="border rounded-2xl p-4 flex flex-col gap-2">
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-gray-600">{date} @ {location}</div>
      {category ? <div className="text-xs text-gray-500">{category}</div> : null}

      <div className="mt-2 flex items-center gap-2">
        <button
          onClick={toggleRsvp}
          className={`rounded-lg px-3 py-1.5 text-sm ${isGoing ? "bg-green-600 text-white" : "bg-blue-600 text-white"}`}
        >
          {isGoing ? "Cancel RSVP" : "RSVP"}
        </button>

        {}
        <button
          onClick={onDelete}
          disabled={!user}
          className="rounded-lg px-3 py-1.5 text-sm border hover:bg-gray-50 disabled:opacity-50"
          title={!user ? "Sign in to delete events" : "Delete this event"}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
