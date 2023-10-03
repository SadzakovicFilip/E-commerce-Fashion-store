import React, { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../product-card/product-card.component";
import "./shop.styles.scss";
import { Link } from "react-router-dom";

const ShopComponent = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const arrayOfTitles = Object.keys(categoriesMap);

  return (
    <>
      {arrayOfTitles.map((title, key) => {
        return (
          <Fragment key={key}>
            <h2>
              <Link to={`/shop/${title}`} key={key}>
                {title.toUpperCase()}
              </Link>
            </h2>
            <div className="products-container">
              {categoriesMap[title]
                .map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })
                .slice(0, 4)}
            </div>
          </Fragment>
        );
      })}
    </>
  );
};

export default ShopComponent;
