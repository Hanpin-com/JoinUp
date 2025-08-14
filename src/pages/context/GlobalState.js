import { createContext, useContext, useMemo, useState } from "react";

const GlobalContext = createContext(null);

export function GlobalProvider({ children }) {
  // Filters for events list
  const [filters, setFilters] = useState({ query: "", category: "", date: "" });

  // RSVP state (array of event objects: { id, title, date, location, ... })
  const [rsvps, setRsvps] = useState([]);

  const addRsvp = (event) => {
    setRsvps((prev) => {
      if (prev.some((e) => e.id === event.id)) return prev; // avoid duplicates
      return [...prev, event];
    });
  };

  const removeRsvp = (eventId) => {
    setRsvps((prev) => prev.filter((e) => e.id !== eventId));
  };

  const value = useMemo(
    () => ({ filters, setFilters, rsvps, addRsvp, removeRsvp }),
    [filters, rsvps]
  );

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
}

export function useGlobalContext() {
  const ctx = useContext(GlobalContext);
  return ctx; 
}
