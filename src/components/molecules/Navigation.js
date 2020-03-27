import React from "react";
import styled from "styled-components";
import theme from "theme";
import { NavLink } from "react-router-dom";
import shopCartIcon from "assets/icons/shopCart.svg";
import Icon from "components/atoms/Icon";
import Logo from "components/molecules/Logo";

const StyledWrapper = styled.header`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  background: rgba(${theme.primaryColor}, 0.5);
  background: ${theme.navigationColor};
  color: ${theme.secondaryColor};
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: space-around;
  padding-left: 10%;
  padding-right: 5%;
`;
const StyledNavLink = styled(NavLink)`
  color: ${theme.secondaryColor};
  text-transform: uppercase;
  text-decoration: none;
  font-size: ${theme.fontSize.s};
  font-weight: ${theme.fontWeight.m};
  padding: 5px;
  position: relative;
  &.active {
    :after {
      transform: scaleX(1) translateX(-50%);
    }
  }
  &:hover:after {
    transform: scaleX(1) translateX(-50%);
  }
  &:after {
    content: "";
    transition: transform 300ms ease-in-out;
    position: absolute;
    width: 100%;
    height: 3px;
    background: ${theme.secondaryColor};
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 30px;
    transform: scaleX(0);
    transform-origin: center;
  }
`;
const StyledNavLinksWrapper = styled.nav`
  flex: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = () => (
  <StyledWrapper>
    <Logo />
    <StyledNavLinksWrapper>
      <StyledNavLink activeClassName={"active"} to="/home">
        strona główna
      </StyledNavLink>
      <StyledNavLink to="/about">o cbd</StyledNavLink>
      <StyledNavLink to="/products">nasze produkty</StyledNavLink>
      <StyledNavLink to="/contact">kontakt</StyledNavLink>
      <StyledNavLink to="/shopcart">
        <Icon urlIcon={shopCartIcon} />
      </StyledNavLink>
    </StyledNavLinksWrapper>
  </StyledWrapper>
);

export default Navigation;
