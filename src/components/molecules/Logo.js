import React from "react";
import styled from "styled-components";
import theme from "theme";
import Title from "components/atoms/Title";
import Icon from "components/atoms/Icon";
import weedIcon from "assets/icons/weed.svg";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;
const StyledTitle = styled(Title)`
  text-transform: uppercase;
  margin: 0 10px;
  margin-top: 10px;
  @media screen and (max-width: ${theme.mediaQueries.tablet}) {
    font-size: ${theme.fontSize.m};
  }
`;
const StyledIcon = styled(Icon)`
  @media screen and (max-width: ${theme.mediaQueries.tablet}) {
    width: 30px;
    height: 30px;
  }
`;

const Logo = () => (
  <StyledWrapper>
    <StyledIcon urlIcon={weedIcon} />
    <StyledTitle>coffee shop</StyledTitle>
    <StyledIcon urlIcon={weedIcon} />
  </StyledWrapper>
);
export default Logo;
