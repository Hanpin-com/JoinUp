import { useMemo, useState } from "react";
import Layout from "../pages/components/Layout";
import EventCard from "../pages/components/EventCard";
import { useGlobalContext } from "../pages/context/GlobalState";
import { useAuth } from "../pages/context/AuthContect";

export default function EventsPage() {
  const { events, addEvent, deleteEvent, filters } = useGlobalContext() || {
    events: [], addEvent: () => {}, deleteEvent: () => {}, filters: {}
  };
  const { user } = useAuth() || {};

  const [form, setForm] = useState({ title: "", date: "", location: "", category: "" });
  const canSubmit = form.title && form.date && form.location && form.category;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!user) return;         
    if (!canSubmit) return;
    addEvent(form);
    setForm({ title: "", date: "", location: "", category: "" });
  };

  const visible = useMemo(() => {
    const q = (filters?.query || "").toLowerCase();
    const cat = filters?.category || "";
    const date = filters?.date || "";
    return events.filter((e) => {
      const okQ = !q || e.title.toLowerCase().includes(q) || e.location.toLowerCase().includes(q);
      const okC = !cat || e.category === cat;
      const okD = !date || e.date === date;
      return okQ && okC && okD;
    });
  }, [events, filters]);

  return (
    <Layout>
      <section className="p-6 max-w-5xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Upcoming Events</h1>

        {}
        <form onSubmit={onSubmit} className="grid gap-3 md:grid-cols-5 bg-white border rounded-2xl p-4">
          <input
            className="border rounded-xl px-3 py-2 md:col-span-2"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            disabled={!user}
          />
          <input
            className="border rounded-xl px-3 py-2"
            placeholder="Date (e.g., Aug 20)"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            disabled={!user}
          />
          <input
            className="border rounded-xl px-3 py-2"
            placeholder="Location"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            disabled={!user}
          />
          <select
            className="border rounded-xl px-3 py-2"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            disabled={!user}
          >
            <option value="">Category</option>
            <option value="community">Community</option>
            <option value="art">Art</option>
            <option value="food">Food</option>
            <option value="tech">Tech</option>
          </select>
          <button
            type="submit"
            disabled={!user || !canSubmit}
            className="md:col-span-5 rounded-xl bg-blue-600 text-white py-2.5 font-medium hover:bg-blue-700 disabled:opacity-50"
            title={!user ? "Please sign in to add events" : (!canSubmit ? "Fill all fields" : "")}
          >
            Add Event
          </button>
          {!user && (
            <p className="md:col-span-5 text-xs text-gray-500">
              You can view this form while signed out, but you need to sign in to add events.
            </p>
          )}
        </form>

        { }
        {visible.length === 0 ? (
          <p className="text-gray-500">No events match your filters.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((e) => (
              <EventCard
                key={e.id}
                id={e.id}
                title={e.title}
                date={e.date}
                location={e.location}
                category={e.category}
                onDelete={() => deleteEvent(e.id)}
              />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

