import React, { Fragment, useEffect } from "react";

import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";
import { ProductsContainer } from "./shop.styles";
import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categories.selector";
import { useDispatch } from "react-redux";
import { fetchCategoriesAsync } from "../../store/categories/categories.action";
import Spinner from "../spiner/spiner.component";
const ShopComponent = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectCategoriesIsLoading);

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);

  const categoriesMap = useSelector(selectCategoriesMap);
  const arrayOfTitles = Object.keys(categoriesMap);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        arrayOfTitles.map((title, key) => {
          return (
            <Fragment key={key}>
              <h2>
                <Link to={`/shop/${title}`} key={key}>
                  {title.toUpperCase()}
                </Link>
              </h2>
              <ProductsContainer>
                {categoriesMap[title]
                  .map((product) => {
                    return <ProductCard key={product.id} product={product} />;
                  })
                  .slice(0, 4)}
              </ProductsContainer>
            </Fragment>
          );
        })
      )}
    </>
  );
};

export default ShopComponent;
