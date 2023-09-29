import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../product-card/product-card.component";
import "./shop.styles.scss";

const ShopComponent = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-cotnainer">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ShopComponent;
