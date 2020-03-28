import React from "react";
import styled from "styled-components";
import ItemLabel from "components/atoms/ItemLabel";
import Button from "components/atoms/Button";

const StyledWrapper = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const StyledItemLabel = styled(ItemLabel)`
  margin: 10px 0;
`;

const ProductItem = ({ image, label, price, type }) => (
  <StyledWrapper>
    <img src={image} alt="product" />
    <ItemLabel>{label}</ItemLabel>
    <StyledItemLabel>{price} zł</StyledItemLabel>
    <Button rounded>Dodaj do koszyka</Button>
  </StyledWrapper>
);

export default ProductItem;
