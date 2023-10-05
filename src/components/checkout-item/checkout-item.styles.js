import styled from "styled-components";

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
min-height: 100px;
border-bottom: 1px solid darkgrey;
padding: 15px 0px;
font-size: 20px;
align-items: center;
${ImageContainer};

${Name},
${Quantity},
${Price}{
  width: 23%;
}

  img {
    width: 100%;
    height: 100%;
`;
export const Arrow = styled.div`
  cursor: pointer;
`;
export const Value = styled.span`
  margin: 0 10px;
`;
export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
