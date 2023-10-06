import styled from "styled-components";
import { xl, m, s } from "../../resonsivnes/responsivnes";

export const CheckoutContainer = styled.div`
  ${xl} {
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
  }

  ${m} {
    width: 100%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 0;
  }

  ${s} {
    width: 100%;
    min-height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    margin: 0 auto 0;
  }
`;
export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  @media screen and (max-width: 400px) {
    width: 15%;
    font-size: 9px;
  }

  &:last-child {
    width: 8%;
  }
`;
export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  ${xl} {
    font-size: 36px;
  }
  margin-left: auto;
  ${m} {
    font-size: 32px;
  }
  margin-left: auto;
  ${s} {
    font-size: 28px;
  }
`;

export const Footer = styled.div`
  margin-top: 100px;
  color: red;
`;
