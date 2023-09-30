import React, { useContext } from "react";
import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { setIsCartOpen } = useContext(CartContext);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/checkout");
    setIsCartOpen(false);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem, key) => (
          <CartItem key={key} cartItem={cartItem} />
        ))}
      </div>
      <Button onClick={handleClick}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
