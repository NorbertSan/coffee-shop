import React from "react";
import styled from "styled-components";
import SocialMediaBar from "components/molecules/SocialMediaBar";
import FooterContactInfo from "components/molecules/FooterContactInfo";
import ArrowUpButton from "components/atoms/ArrowUpButton";

const StyledWrapper = styled.footer`
  width: 100%;
  margin-top: 150px;
  position: relative;
`;

const Footer = () => {
  return (
    <>
      <StyledWrapper>
        <ArrowUpButton />
        <SocialMediaBar />
        <FooterContactInfo />
      </StyledWrapper>
    </>
  );
};

export default Footer;
