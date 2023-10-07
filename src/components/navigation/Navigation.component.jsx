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

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { setIsCartOpen, isCartOpen, isDrawerOpen, setIsDrawerOpen } =
    useContext(CartContext);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
    setIsCartOpen(false);
  };
  const closeDrawers = () => {
    setIsDrawerOpen(false);
    setIsCartOpen(false);
  };
  const signOutHandler = () => {
    signOutUser();
    closeDrawers();
  };
  return (
    <>
      <NavigationContainer>
        <LogoContainer onClick={closeDrawers} to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop" onClick={closeDrawers}>
            SHOP
          </NavLink>

          {currentUser ? (
            <NavLink onClick={signOutUser}>SIGN OUT</NavLink>
          ) : (
            <NavLink to="/auth" onClick={closeDrawers}>
              SIGN IN
            </NavLink>
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
            <NavLink to="/shop" onClick={closeDrawers}>
              SHOP
            </NavLink>
            {currentUser ? (
              <NavLink onClick={signOutHandler}>SIGN OUT</NavLink>
            ) : (
              <NavLink to="/auth" onClick={closeDrawers}>
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
