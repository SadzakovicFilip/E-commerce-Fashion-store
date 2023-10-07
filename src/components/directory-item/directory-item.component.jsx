import { Link } from "react-router-dom";
import {
  BackgroundImage,
  DirectoryItemContainer,
  Body,
} from "./directory-item.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const DirectoryItem = ({ category }) => {
  const { closeCartDropdown } = useContext(CartContext);
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer
      as={Link}
      to={`/shop/${title}`}
      onClick={closeCartDropdown}
    >
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
