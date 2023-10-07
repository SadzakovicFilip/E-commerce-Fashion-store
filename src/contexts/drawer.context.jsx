import React, { createContext, useState } from "react";

export const DrawerContext = createContext({
  isDrawerOpen: false,
  setIsDrawerOpen: () => {},
});

const DrawerProvider = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const contextValue = {
    isDrawerOpen,
    setIsDrawerOpen,
  };
  return (
    <DrawerContext.Provider value={contextValue}>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;
