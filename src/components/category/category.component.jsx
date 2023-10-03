import React from "react";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { useParams } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import "./category.styles.scss";

const Category = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const { title } = useParams();

  return (
    <>
      <h2 className="category-title">{title.toUpperCase()}</h2>
      <div className="products-container">
        {categoriesMap[title]?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default Category;
