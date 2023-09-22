import { categories } from "./data";
import CategoryItem from "../category-item/category-item.component";
import "./category-menu.styles.scss";

import React from "react";

const CategoryMenu = () => {
  return (
    <div className="categories-container">
      {categories.map((category, key) => (
        <CategoryItem key={key} category={category} />
      ))}
    </div>
  );
};

export default CategoryMenu;
