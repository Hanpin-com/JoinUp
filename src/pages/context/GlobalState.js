import { createContext, useContext, useEffect, useMemo, useState } from "react";

const GlobalContext = createContext(null);

const DEFAULT_EVENTS = [
  { id: 1, title: "Garage Sale",      date: "Aug 5",  location: "Maple St.",  category: "community" },
  { id: 2, title: "Art Fair",         date: "Aug 7",  location: "Main Plaza", category: "art" },
  { id: 3, title: "Food Truck Rally", date: "Aug 12", location: "Park Ave",   category: "food" },
];

export function GlobalProvider({ children }) {
  const [filters, setFilters] = useState({ query: "", category: "", date: "" });


  const [events, setEvents] = useState(DEFAULT_EVENTS);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("joinup_events");
      if (saved) setEvents(JSON.parse(saved));
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem("joinup_events", JSON.stringify(events));
    } catch {}
  }, [events]);

  const addEvent = (evt) => {
    setEvents((prev) => {
      const id = typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : Date.now();
      return [{ ...evt, id }, ...prev];
    });
  };
  const deleteEvent = (id) => setEvents((prev) => prev.filter((e) => e.id !== id));

  const [rsvps, setRsvps] = useState([]);
  const addRsvp = (event) => setRsvps((prev) => (prev.some((e) => e.id === event.id) ? prev : [...prev, event]));
  const removeRsvp = (eventId) => setRsvps((prev) => prev.filter((e) => e.id !== eventId));

  const value = useMemo(
    () => ({
      // filters
      filters, setFilters,
      // events CRUD
      events, addEvent, deleteEvent,
      // rsvps
      rsvps, addRsvp, removeRsvp,
    }),
    [filters, events, rsvps]
  );

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}

