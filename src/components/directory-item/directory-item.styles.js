import styled from "styled-components";
import { m, s, xl } from "../../resonsivnes/responsivnes";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  background-image: ${(props) => {
    return `url(${props.imageUrl})`;
  }};
`;

export const Body = styled.div`
  height: 15%;
  padding: 0 25px;
  ${s} {
    width: 23%;
  }
  ${m} {
    padding: 0 15px;
  }
  ${s} {
    padding: 0 7px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  h2 {
    font-weight: bold;
    margin: 0;
    ${xl} {
      font-size: 22px;
    }
    ${m} {
      font-size: 18px;
    }
    ${s} {
      font-size: 13px;
    }
    color: #4a4a4a;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
    min-width: 50px;
    text-align: center;
    ${m} {
      font-size: 14px;
    }
    ${s} {
      font-size: 11px;
    }
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;
