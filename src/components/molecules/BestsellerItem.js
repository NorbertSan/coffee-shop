import React from "react";
import ItemLabel from "components/atoms/ItemLabel";
import styled from "styled-components";
import ocbImage from "assets/images/ocbbletki.png";
import BestsellerLabel from "components/atoms/BestsellerLabel";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;
const StyledImage = styled.img``;
const StyledBestsellerLabel = styled(BestsellerLabel)`
  position: absolute;
  top: 0px;
  left: 20px;
`;

const BestsellerItem = () => (
  <StyledWrapper>
    <StyledImage src={ocbImage} />
    <ItemLabel>BIBUŁKI OCB BLACK KING</ItemLabel>
    <StyledBestsellerLabel>bestseller</StyledBestsellerLabel>
  </StyledWrapper>
);

export default BestsellerItem;
