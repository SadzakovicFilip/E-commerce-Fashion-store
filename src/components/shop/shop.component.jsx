import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
const ShopComponent = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default ShopComponent;
