import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../checkout-item/checkout-item.component";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  Footer,
} from "./checkout.styles";
const Checkout = () => {
  const { cartState } = useContext(CartContext);
  const header = [`product`, `description`, `quantity`, `price`, `remove`];

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        {header.map((title, key) => {
          return (
            <HeaderBlock key={key}>
              <span>{title}</span>
            </HeaderBlock>
          );
        })}
      </CheckoutHeader>
      {cartState.cartItems.map((item, key) => (
        <CheckoutItem key={key} item={item} />
      ))}
      {cartState.cartTotal === 0 ? (
        <Total>Your cart is empty</Total>
      ) : (
        <Total>TOTAL : ${cartState.cartTotal}</Total>
      )}
      <Footer>*Please use the following test credit card for payments*</Footer>
    </CheckoutContainer>
  );
};

export default Checkout;
