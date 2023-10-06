import styled from "styled-components";
import { xl, m, s } from "../../resonsivnes/responsivnes";
export const ProductsContainer = styled.div`
  display: grid;
  row-gap: 50px;
  column-gap: 10px;
  ${xl} {
    grid-template-columns: repeat(4, 1fr);
  }
  ${m} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
