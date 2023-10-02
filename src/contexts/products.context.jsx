import React, { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
  setProdutcts: () => {},
  products: [],
});

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const contextValue = { products, setProducts };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    };
    getCategoriesMap();
  }, []);

  // useEffect(() => {
  // addCollectionAndDocuments(`categories`, SHOP_DATA);
  // }, []);
  // i stored it once, it was just to show how to store documents from frontend to the backend

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductProvider;
