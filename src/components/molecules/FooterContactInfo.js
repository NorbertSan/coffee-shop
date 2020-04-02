import React from "react";
import styled from "styled-components";
import theme from "theme";
import mailIcon from "assets/icons/mail.svg";
import phoneIcon from "assets/icons/phone.svg";
import Icon from "components/atoms/Icon";
import Paragraph from "components/atoms/Paragraph";
import Title from "components/atoms/Title";

const StyledWrapper = styled.div`
  background: ${theme.secondaryColor};
  display: flex;
  justify-content: space-around;
  margin: auto;
  padding-top: 10px;
  margin-top: 20px;
  @media screen and (max-width: ${theme.mediaQueries.phone}) {
    text-align: center;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledInfoItem = styled.div`
  display: flex;
  align-items: center;
`;

const FooterContactInfo = () => (
  <StyledWrapper>
    <StyledInfo>
      <Title>Skontaktuj się z nami</Title>
      <StyledInfoItem>
        <a href="mailto:coffeeshop@gmail.com">
          <Icon urlIcon={mailIcon} small />
        </a>
        <Paragraph>coffeeshop@gmail.com</Paragraph>
      </StyledInfoItem>
      <StyledInfoItem>
        <Icon urlIcon={phoneIcon} small />
        <Paragraph>565-262-887</Paragraph>
      </StyledInfoItem>
    </StyledInfo>
    <StyledInfo>
      <Title>Dane adresowe</Title>
      <Paragraph>Coffee Shop Kraków</Paragraph>
    </StyledInfo>
  </StyledWrapper>
);

export default FooterContactInfo;
