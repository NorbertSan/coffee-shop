import React from "react";
import styled from "styled-components";
import Title from "components/atoms/Title";
import theme from "theme";
import Button from "components/atoms/Button";

const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 50px;
`;
const StyledTitle = styled(Title)`
  font-size: ${theme.fontSize.m};
`;
const StyledButton = styled(Button)`
  margin: 4px 0;
  width: 200px;
`;

const ShoppingCartSummary = () => (
  <StyledWrapper>
    <StyledTitle>
      Kwota: <span>26.99 zł</span>
    </StyledTitle>
    <StyledButton secondary>zobacz koszyk</StyledButton>
    <StyledButton secondary>zamówienie</StyledButton>
  </StyledWrapper>
);
export default ShoppingCartSummary;
