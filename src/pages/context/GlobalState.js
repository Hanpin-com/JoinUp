import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [filters, setFilters] = useState({ category: '', date: '', radius: 5 });
  const [user, setUser] = useState(null);
  const [rsvps, setRsvps] = useState([]);

  return (
    <GlobalContext.Provider value={{ filters, setFilters, user, setUser, rsvps, setRsvps }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);