export default function EventCard({ title, date, location, onRsvp }) {
  return (
    <div className="border p-4 rounded-xl shadow-md">
      <h3 className="text-lg font-bold">{title}</h3>
      <p>{date}</p>
      <p>{location}</p>
      <button 
        className="bg-blue-500 text-white px-4 py-1 rounded mt-2"
        onClick={onRsvp}
      >
        RSVP
      </button>
    </div>
  );
}