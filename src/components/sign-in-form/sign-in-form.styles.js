import styled from "styled-components";
import { m, s } from "../../resonsivnes/responsivnes";

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const ErrorMessage = styled.h2`
  color: red;
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