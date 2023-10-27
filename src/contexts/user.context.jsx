import React, { useEffect, useReducer } from "react";
import { createContext } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangeListener,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  //this is not neccessary
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: `SET_CURRENT_USER`,
};

const INITIAL_STATE = {
  currentUser: null,
};

const userReducerFunction = (currentState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...currentState,
        currentUser: payload,
      };

    default:
      throw new Error(`Unhandled type ${type} in useReducer`);
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducerFunction, INITIAL_STATE);

  const { currentUser } = state;

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };

  const contextValue = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
