import styled from "styled-components";
import { m, s, xl } from "../../resonsivnes/responsivnes";
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const ErrorMessage = styled.div`
  display: flex;
  margin-left: 14%;
  padding-bottom: 7%;
  color: red;
  text-transform: uppercase;
`;
export const GooglePopUp = styled.div`
  min-width: 57%;
  button {
    width: 90%;
  }
  ${m} {
    display: none;
  }
  ${s} {
    display: none;
  }
`;
export const GoogleRedirect = styled.div`
  min-width: 60%;
  button {
    max-width: 70%;
    padding: 0 10px;
  }
  ${xl} {
    display: none;
  }
`;
export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  ${m} {
    width: 80%;
    margin-left: 20px;
  }
  ${s} {
    width: 80%;
    margin-left: 20px;
  }

  h2 {
    margin: 10px 0;
  }
`;
export const SignInButton = styled.div`
  min-width: 40%;
  button {
    min-width: 57%;
    max-width: 80%;
  }
`;
