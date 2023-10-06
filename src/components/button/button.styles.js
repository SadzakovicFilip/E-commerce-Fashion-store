import styled from "styled-components";
import { m, s, xl } from "../../resonsivnes/responsivnes";

export const BaseButton = styled.button`
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  ${xl} {
    padding: 0 8%;
  }
  ${m} {
    padding: 0 10%;
  }
  ${s} {
    padding: 0 2%;
  }

  font-size: 12.7px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
    color: white;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
