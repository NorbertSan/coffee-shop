import React from "react";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeProduct } from "actions/shoppingActions";
import ItemLabel from "components/atoms/ItemLabel";
import Icon from "components/atoms/Icon";
import closeIcon from "assets/icons/close.svg";
import theme from "theme";

const appear = keyframes`
  0%{
    opacity:0;
    transform:translateY(10px);
  }100%{
    opacity:1;
  }
`;
const StyledWrapper = styled.li`
  margin-top: 50px;
  list-style: none;
  padding: 0;
  border-bottom: 1px solid ${theme.primaryColor};
  padding-bottom: 20px;
  animation: ${appear} 0.5s ease-in-out;
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  color: ${theme.primaryColor};
  text-decoration: none;
`;
const StyledIcon = styled(Icon)`
  border: none;
  margin-right: 30px;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;
const StyledItemLabel = styled(ItemLabel)`
  margin-top: 8px;
  font-weight: ${theme.fontWeight.medium};
  span {
    text-transform: lowercase;
  }
`;

const ShoppingCardItem = ({
  image,
  price,
  label,
  amount,
  removeProduct,
  id
}) => (
  <StyledWrapper>
    <StyledInnerWrapper>
      <StyledIcon
        small
        onClick={() => removeProduct(id)}
        as="button"
        urlIcon={closeIcon}
      />
      <StyledLink to={`/products/${id}`}>
        <ItemLabel>{label}</ItemLabel>
        <StyledItemLabel>
          <span>{`${amount}x `}</span>
          {`${(amount * price).toFixed(2)} zł`}
        </StyledItemLabel>
      </StyledLink>
    </StyledInnerWrapper>
  </StyledWrapper>
);

export default connect(null, { removeProduct })(ShoppingCardItem);
