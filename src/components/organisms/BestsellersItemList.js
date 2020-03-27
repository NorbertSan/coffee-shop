import React from "react";
import BestsellerItem from "components/molecules/BestsellerItem";
import theme from "theme";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  margin-bottom: 70px;
  grid-gap: 20px;
`;

const BestsellersItemList = () => (
  <StyledWrapper>
    <BestsellerItem />
    <BestsellerItem />
    <BestsellerItem />
  </StyledWrapper>
);
export default BestsellersItemList;
