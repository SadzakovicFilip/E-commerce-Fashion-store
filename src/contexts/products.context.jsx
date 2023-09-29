import React, { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../components/shop/shop-data.json";

export const ProductsContext = createContext({
  setProdutcts: () => {},
  products: [],
});

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const contextValue = { products, setProducts };

  useEffect(() => {
    setProducts(SHOP_DATA);
  }, []);

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductProvider;
