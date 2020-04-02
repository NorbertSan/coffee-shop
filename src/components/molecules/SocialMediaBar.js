import React from "react";
import styled from "styled-components";
import theme from "theme";
import facebookIcon from "assets/icons/facebook.svg";
import instagramIcon from "assets/icons/instagram.svg";
import SocialMediaItem from "components/molecules/SocialMediaItem";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60%;
  margin: auto;
  text-align: center;
  @media screen and (max-width: ${theme.mediaQueries.tablet}) {
    width: 100%;
  }
`;
const Styledahref = styled.a`
  color: ${theme.primaryColor};
  text-decoration: none;
`;

const SocialMediaBar = () => (
  <StyledWrapper>
    <Styledahref href="https://facebook.com" target="_blank">
      <SocialMediaItem icon={facebookIcon} />
    </Styledahref>
    <Styledahref href="https://instagram.com" target="_blank">
      <SocialMediaItem icon={instagramIcon} />
    </Styledahref>
  </StyledWrapper>
);

export default SocialMediaBar;
