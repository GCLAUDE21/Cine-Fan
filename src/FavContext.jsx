import { createContext, useState, useContext, useEffect } from 'react';

const FavContext = createContext();

export const FavProvider = ({ children }) => {
  const [favMovies, setFavMovie] = useState(() => {
    const stored = localStorage.getItem("favMovies");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
      localStorage.setItem("favMovies", JSON.stringify(favMovies));
    }, [favMovies])

  return (
    <FavContext.Provider value={{ favMovies, setFavMovie }}>
      {children}
    </FavContext.Provider>
  );
};

export const useFav = () => useContext(FavContext);