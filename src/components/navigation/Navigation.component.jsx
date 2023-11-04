import React, { useContext } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
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
import { DrawerContext } from "../../contexts/drawer.context";
import { selectCurrentUser } from "../../store/user/user.selector";
import { closeCartDropdown } from "../../store/cart/cart.action";
import { useDispatch } from "react-redux";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const { isDrawerOpen, setIsDrawerOpen } = useContext(DrawerContext);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
    dispatch(closeCartDropdown());
  };
  const closeDrawers = () => {
    setIsDrawerOpen(false);
    dispatch(closeCartDropdown());
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
