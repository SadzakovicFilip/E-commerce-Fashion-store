import { Link } from "react-router-dom";
import {
  BackgroundImage,
  DirectoryItemContainer,
  Body,
} from "./directory-item.styles";

import { closeCartDropdown } from "../../store/cart/cart.reducer";
import { useDispatch } from "react-redux";

const DirectoryItem = ({ category }) => {
  const dispatch = useDispatch();
  const closeCartDropdownFunc = () => dispatch(closeCartDropdown());

  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer
      as={Link}
      to={`/shop/${title}`}
      onClick={closeCartDropdownFunc}
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
