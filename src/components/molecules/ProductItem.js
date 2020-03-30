import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import theme from "theme";
import styled from "styled-components";
import ItemLabel from "components/atoms/ItemLabel";
import Button from "components/atoms/Button";
import { addProduct } from "actions/shoppingActions";

const StyledWrapper = styled.li`
  cursor: pointer;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: 300ms;
`;
const StyledItemLabel = styled(ItemLabel)`
  margin: 10px 0;
`;
const StyledLink = styled(Link)`
  color: ${theme.primaryColor};
  text-decoration: none;
`;

const ProductItem = ({ image, label, price, type, addProduct, id }) => (
  <StyledWrapper>
    <StyledLink to={`products/${id}`}>
      <img src={image} alt="product" />
    </StyledLink>
    <ItemLabel>{label}</ItemLabel>
    <StyledItemLabel>{price.toFixed(2)} zł</StyledItemLabel>
    <Button
      onClick={() => addProduct({ image, label, price, type, amount: 1, id })}
      rounded
    >
      Dodaj do koszyka
    </Button>
  </StyledWrapper>
);

export default connect(null, { addProduct })(ProductItem);
