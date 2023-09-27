import React, { useState, useEffect } from "react";
import { createContext } from "react";
import {
  onAuthStateChangeListener,
  signOutUser,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  //this is not neccessary
});
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const contextValue = { currentUser, setCurrentUser };
  signOutUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      console.log(user);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
