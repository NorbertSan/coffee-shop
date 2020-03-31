import React from "react";
import styled from "styled-components";
import theme from "theme";
import { connect } from "react-redux";
import {
  removeProduct,
  addProduct,
  decreaseProduct
} from "actions/shoppingActions";
import Icon from "components/atoms/Icon";
import closeIcon from "assets/icons/close.svg";
import ItemLabel from "components/atoms/ItemLabel";
import plusIcon from "assets/icons/plus.svg";
import minusIcon from "assets/icons/minus.svg";

const StyledWrapper = styled.ul`
  margin: 0;
  padding: 20px;
  border-top: 1px solid ${theme.primaryColor};
  list-style: none;
  display: flex;
  justify-content: space-around;
  position: relative;
  align-items: center;
  * {
    flex: 3;
    text-align: center;
  }
`;
const StyledIcon = styled(Icon)`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
  cursor: pointer;
  z-index: 999;
`;
const StyledInfo = styled.div`
  display: flex;
  align-items: center;
`;
const StyledImage = styled.img`
  padding: 0;
  margin: 0;
  height: 40px;
  object-fit: contain;
`;
const StyledInnerWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  input {
    width: 80%;
    padding: 5px 5px;
  }
`;
const StyledIconSecondary = styled(Icon)`
  transform: scale(0.6);
  cursor: pointer;
`;

const ShoppingCardTableItem = ({
  product,
  removeProduct,
  addProduct,
  decreaseProduct
}) => (
  <StyledWrapper>
    <StyledIcon urlIcon={closeIcon} onClick={() => removeProduct(product.id)} />
    <StyledInfo>
      <StyledImage src={product.image} />
      <ItemLabel>{product.label}</ItemLabel>
    </StyledInfo>
    <ItemLabel>{product.price} zł</ItemLabel>
    <StyledInnerWrapper>
      <StyledIconSecondary
        urlIcon={minusIcon}
        onClick={() => {
          product.amount === 1
            ? removeProduct(product.id)
            : decreaseProduct(product.id);
        }}
      />
      <input type="number" readOnly value={product.amount} />
      <StyledIconSecondary
        urlIcon={plusIcon}
        onClick={() => addProduct(product)}
      />
    </StyledInnerWrapper>
    <ItemLabel>{(product.amount * product.price).toFixed(2)} zł</ItemLabel>
  </StyledWrapper>
);

export default connect(null, { removeProduct, addProduct, decreaseProduct })(
  ShoppingCardTableItem
);
