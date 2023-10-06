import React, { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
  ButtonAndCartContainer,
  ButtonContainer,
  DrawerContainer,
} from "./navigation.styles";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, isDrawerOpen, setIsDrawerOpen } = useContext(CartContext);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };
  const closeDrawer = () => setIsDrawerOpen(false);
  const signOutHandler = () => (signOutUser(), toggleDrawer());
  return (
    <>
      <NavigationContainer>
        <LogoContainer onClick={closeDrawer} to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink onClick={signOutUser}>SIGN OUT</NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
        </NavLinks>
        <ButtonAndCartContainer>
          <ButtonContainer>
            <button onClick={toggleDrawer}>&#8801;</button>
          </ButtonContainer>
          <CartIcon />
        </ButtonAndCartContainer>
        {isCartOpen && <CartDropdown />}
        {isDrawerOpen && (
          <DrawerContainer>
            <NavLink to="/shop" onClick={toggleDrawer}>
              SHOP
            </NavLink>
            {currentUser ? (
              <NavLink onClick={signOutHandler}>SIGN OUT</NavLink>
            ) : (
              <NavLink to="/auth" onClick={toggleDrawer}>
                SIGN IN
              </NavLink>
            )}
          </DrawerContainer>
        )}
      </NavigationContainer>
    </>
  );
};

export default Navigation;
