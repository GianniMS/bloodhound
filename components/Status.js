import React, { createContext, useState, useContext } from 'react';

// Create a context object
const StatusContext = createContext();

// Custom hook to use the status context
export const useStatus = () => useContext(StatusContext);

// Status provider component
export const StatusProvider = ({ children }) => {
  const [isGrayscale, setIsGrayscale] = useState(false);

  const toggleGrayscale = () => {
    setIsGrayscale(prev => !prev);
  };

  return (
    <StatusContext.Provider value={{ isGrayscale, toggleGrayscale }}>
      {children}
    </StatusContext.Provider>
  );
};
