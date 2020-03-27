import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Title from "components/atoms/Title";
import Icon from "components/atoms/Icon";
import weedIcon from "assets/icons/weed.svg";
import Button from "components/atoms/Button";
import BestsellersItemList from "components/organisms/BestsellersItemList";

const StyledWrapper = styled.div`
  text-align: center;
  margin-bottom: 100px;
`;
const StyledIcon = styled(Icon)`
  margin-bottom: 150px;
`;

const BestsellersSection = () => (
  <StyledWrapper>
    <Title>Nasze bestsellery</Title>
    <StyledIcon urlIcon={weedIcon} />
    <BestsellersItemList />
    <Link to="/products">
      <Button rounded>Zobacz wszystkie produkty</Button>
    </Link>
  </StyledWrapper>
);

export default BestsellersSection;
