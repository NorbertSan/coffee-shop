import React from "react";
import styled from "styled-components";
import Icon from "components/atoms/Icon";
import Title from "components/atoms/Title";
import shopCardIcon from "assets/icons/shopCart.svg";
import ShoppingCardItemsList from "components/organisms/ShoppingCardItemsList";
import ShoppingCartSummary from "components/molecules/ShoppingCartSummary";
import theme from "theme";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid ${theme.primaryColor};
  min-height: 60vh;
  width: 100%;
`;
const StyledInfo = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 150%;
    height: 3px;
    left: 50%;
    bottom: -5px;
    transform: translateX(-50%);
    background: ${theme.primaryColor};
    border-radius: 10px;
  }
`;
const StyledTitle = styled(Title)`
  font-size: ${theme.fontSize.m};
  text-transform: uppercase;
`;
const StyledIcon = styled(Icon)`
  margin: 0;
  margin-right: 8px;
`;

const ShoppingCard = () => (
  <StyledWrapper>
    <StyledInfo>
      <StyledIcon small urlIcon={shopCardIcon} />
      <StyledTitle>Koszyk</StyledTitle>
    </StyledInfo>
    <ShoppingCardItemsList />
    <ShoppingCartSummary />
  </StyledWrapper>
);

export default ShoppingCard;
