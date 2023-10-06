import styled from "styled-components";
import { m, s } from "../../resonsivnes/responsivnes";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  ${m} {
    margin-top: 10%;
    width: 80%;
    margin-left: 20px;
  }
  ${s} {
    margin-top: 10%;
    width: 80%;
    margin-left: 20px;
  }

  h2 {
    margin: 10px 0;
  }
`;
