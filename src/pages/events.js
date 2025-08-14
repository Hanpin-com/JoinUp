// src/pages/events.js
import EventCard from "../pages/components/EventCard"; 
import Layout from "../pages/components/Layout";           
import { useGlobalContext } from "../pages/context/GlobalState"; 

export default function EventsPage() {
  const ctx = useGlobalContext() || { filters: { category: "", date: "" } };
  const { filters } = ctx;

  // Sample static data (replace with API fetch later)
  const sampleEvents = [
    { id: 1, title: "Garage Sale",       date: "Aug 5",  location: "Maple St.",  category: "community" },
    { id: 2, title: "Art Fair",          date: "Aug 7",  location: "Main Plaza", category: "art" },
    { id: 3, title: "Food Truck Rally",  date: "Aug 12", location: "Park Ave",   category: "food" },
  ];

  // Apply filters if set
  const visibleEvents = sampleEvents.filter((e) => {
    const okCategory = filters?.category ? e.category === filters.category : true;
    const okDate = filters?.date ? e.date === filters.date : true; 
    return okCategory && okDate;
  });

  return (
    <Layout>
      <section className="p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>

        {visibleEvents.length === 0 && (
          <p className="text-gray-500">No events match your filters.</p>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleEvents.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.date}
              location={event.location}
              // category={event.category}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

