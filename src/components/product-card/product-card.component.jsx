import React, { useContext } from "react";
import "./product-card.styles.js";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  ProductCartContainer,
  Name,
  Price,
  Footer,
} from "./product-card.styles.js";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
