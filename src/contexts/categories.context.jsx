import React, { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  setCategoriesMap: () => {},
  categoriesMap: {},
});

const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const contextValue = { categoriesMap, setCategoriesMap };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  // useEffect(() => {
  // addCollectionAndDocuments(`categories`, SHOP_DATA);
  // }, []);
  // i stored it once, it was just to show how to store documents from frontend to the backend

  return (
    <CategoriesContext.Provider value={contextValue}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
