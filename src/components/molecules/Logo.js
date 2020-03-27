import React from "react";
import styled from "styled-components";
import Title from "components/atoms/Title";
import Icon from "components/atoms/Icon";
import weedIcon from "assets/icons/weed.svg";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const StyledTitle = styled(Title)`
  text-transform: uppercase;
  margin: 0 10px;
  margin-top: 10px;
`;

const Logo = () => (
  <StyledWrapper>
    <Icon urlIcon={weedIcon} />
    <StyledTitle>coffee shop</StyledTitle>
    <Icon urlIcon={weedIcon} />
  </StyledWrapper>
);
export default Logo;
