import React from "react";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { useParams } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import { CategoryTitle, CategoryContainer } from "./category.styles";
const Category = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const { title } = useParams();

  return (
    <>
      <CategoryTitle>{title.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {categoriesMap[title]?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </CategoryContainer>
    </>
  );
};

export default Category;
