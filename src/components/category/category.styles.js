import styled from "styled-components";
import { xl, m } from "../../resonsivnes/responsivnes";

export const CategoryTitle = styled.div`
  text-align: center;
  font-size: 38px;
  margin-bottom: 25px;
`;
export const CategoryContainer = styled.div`
  display: grid;
  ${xl} {
    grid-template-columns: repeat(4, 1fr);
  }
  ${m} {
    grid-template-columns: repeat(2, 1fr);
  }
  column-gap: 10px;
  row-gap: 50px;
`;
