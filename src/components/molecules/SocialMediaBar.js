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
`;
const Styledahref = styled.a`
  color: ${theme.primaryColor};
  text-decoration: none;
`;

const SocialMediaBar = () => (
  <StyledWrapper>
    <Styledahref href="https://facebook.com" target="_blank">
      <SocialMediaItem icon={facebookIcon} title="Coffee shop kraków" />
    </Styledahref>
    <Styledahref href="https://instagram.com" target="_blank">
      <SocialMediaItem
        icon={instagramIcon}
        title="Coffee shop kraków na instagram"
      />
    </Styledahref>
  </StyledWrapper>
);

export default SocialMediaBar;
