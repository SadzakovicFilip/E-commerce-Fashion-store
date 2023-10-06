import styled from "styled-components";
import { m, s } from "../../resonsivnes/responsivnes";

export const AuthenticationContainer = styled.div`
  display: flex;
  ${m} {
    flex-direction: column;
  }
  ${s} {
    flex-direction: column;
  }
  width: 100%;
  justify-content: space-evenly;
  margin: 30px auto;
`;
