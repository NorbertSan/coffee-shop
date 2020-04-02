import React from "react";
import styled from "styled-components";
import theme from "theme";

const StyledWrapper = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const StyledDiscount = styled.span`
  background: ${theme.tertiaryColor};
  color: ${theme.secondaryColor};
  margin-right: 10px;
  padding: 0 3px;
  border-radius: 5px;
`;
const StyledInfo = styled.span``;

const Coupon = ({ coupon }) => (
  <StyledWrapper>
    <StyledDiscount>-{coupon.discount}%</StyledDiscount>
    <StyledInfo>{coupon.code}</StyledInfo>
  </StyledWrapper>
);

export default Coupon;
