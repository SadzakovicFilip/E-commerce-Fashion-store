import React from "react";
import CheckoutItem from "../checkout-item/checkout-item.component";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  Footer,
} from "./checkout.styles";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import PaymentForm from "../payment-form/payment-form.component";

const Checkout = () => {
  const cartTotal = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);

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
      {cartItems.map((item, key) => (
        <CheckoutItem key={key} item={item} />
      ))}
      {cartTotal === 0 ? (
        <Total>Your cart is empty</Total>
      ) : (
        <Total>TOTAL : ${cartTotal}</Total>
      )}
      <PaymentForm />
      <Footer>*Please use the following test credit card for payments*</Footer>
    </CheckoutContainer>
  );
};

export default Checkout;
