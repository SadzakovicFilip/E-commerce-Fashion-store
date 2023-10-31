import React from "react";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useParams } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import { CategoryTitle, CategoryContainer } from "./category.styles";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  console.log(categoriesMap);
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
