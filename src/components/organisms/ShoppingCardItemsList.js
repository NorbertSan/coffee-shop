import React from "react";
import styled from "styled-components";
import ShoppingCardItem from "components/molecules/ShoppingCardItem";

const StyledWrapper = styled.ul`
  margin: 0;
  padding: 0;
  width: 80%;
`;

const ShoppingCardItemsList = () => (
  <StyledWrapper>
    <ShoppingCardItem />
    <ShoppingCardItem />
    <ShoppingCardItem />
    <ShoppingCardItem />
  </StyledWrapper>
);

export default ShoppingCardItemsList;
