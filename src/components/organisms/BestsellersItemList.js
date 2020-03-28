import React from "react";
import BestsellerItem from "components/molecules/BestsellerItem";
import { bestsellers } from "initialData";
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
    {bestsellers.map(item => (
      <BestsellerItem image={item.image} label={item.label} />
    ))}
  </StyledWrapper>
);
export default BestsellersItemList;
