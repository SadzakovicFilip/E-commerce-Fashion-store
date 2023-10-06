import styled from "styled-components";
import { xl, m, s } from "../../resonsivnes/responsivnes";
export const Name = styled.span``;
export const Price = styled.span``;
export const Quantity = styled.span`
  display: flex;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid darkgrey;

  ${xl} {
    padding: 15px 0px;
    font-size: 20px;
    min-height: 100px;
  }
  ${m} {
    padding: 0px 0px;
    font-size: 15px;
    min-height: 80px;
  }
  ${s} {
    min-height: 50px;
    padding: 0px 0px;
    font-size: 11px;
  }
  align-items: center;
  ${ImageContainer};

  ${Name},
  ${Quantity},
  ${Price} {
    width: 23%;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Arrow = styled.div`
  cursor: pointer;
`;
export const Value = styled.span`
  ${xl} {
    margin: 0 10px;
  }
  ${m} {
    margin: 0 5px;
  }
  ${s} {
    margin: 0 2px;
  }
`;
export const RemoveButton = styled.div`
  cursor: pointer;
`;
