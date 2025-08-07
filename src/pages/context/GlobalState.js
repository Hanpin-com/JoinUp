import { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [rsvps, setRsvps] = useState([]);
  const [filters, setFilters] = useState({ category: '', date: '' });

  // Load RSVPs from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem('rsvps');
    if (saved) setRsvps(JSON.parse(saved));
  }, []);

  // Save RSVPs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('rsvps', JSON.stringify(rsvps));
  }, [rsvps]);

  const addRsvp = (event) => {
    if (!rsvps.some(e => e.id === event.id)) {
      setRsvps(prev => [...prev, event]);
    }
  };

  const removeRsvp = (id) => {
    setRsvps(prev => prev.filter(e => e.id !== id));
  };

  return (
    <GlobalContext.Provider
      value={{
        rsvps,
        filters,
        setFilters,
        addRsvp,
        removeRsvp
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
