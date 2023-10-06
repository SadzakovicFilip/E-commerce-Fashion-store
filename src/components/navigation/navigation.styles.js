import styled from "styled-components";
import { Link } from "react-router-dom";
import { m, s, xl } from "../../resonsivnes/responsivnes";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLinks = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${s} {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const ButtonAndCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  button {
    background-color: transparent;
    border: none;
    font-size: 30px;
    margin-top: 4px;
    cursor: pointer;
  }
  ${xl} {
    display: none;
  }
  ${m} {
    display: none;
  }
`;

export const DrawerContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  top: 90px;
  right: 0px;
  z-index: 2;
`;
