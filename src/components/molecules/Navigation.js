import React from "react";
import styled, { css } from "styled-components";
import theme from "theme";
import { NavLink } from "react-router-dom";
import shopCartIcon from "assets/icons/shopCart.svg";
import Icon from "components/atoms/Icon";
import Logo from "components/molecules/Logo";
import Hamburger from "components/molecules/Hamburger";

const StyledWrapper = styled.header`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 12vh;
  background: rgba(${theme.primaryColor}, 0.5);
  background: ${theme.navigationColor};
  color: ${theme.secondaryColor};
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: space-around;
  padding-left: 10%;
  padding-right: 5%;
  transition: all 400ms ease-in-out;
  ${({ active }) =>
    active &&
    css`
      background: ${theme.tertiaryColor};
      height: 10vh;
    `}
  @media screen and (max-width:${theme.mediaQueries.tablet}){
    grid-template-columns:2fr 3fr;
    padding-left:5%;
  }

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
  @media screen and (max-width: ${theme.mediaQueries.ipad}) {
    position: absolute;
    padding: 40px 0;
    top: 0%;
    left: 0;
    flex-direction: column;
    width: 100%;
    background: ${theme.tertiaryColor};
    height: 300px;
    transform: translateY(-100%);
    transition: transform 0.4s ease-in-out;
    ${({ active }) =>
      active &&
      css`
        transform: translateY(0);
      `}
  }
`;
const StyledNavLinkLogo = styled(NavLink)`
  text-decoration: none;
  color: ${theme.secondaryColor};
`;

class Navigation extends React.Component {
  state = {
    active: false,
    navOpen: false
  };

  toogleHamburger = () =>
    this.setState(prevState => ({ navOpen: !prevState.navOpen }));
  navigationListener() {
    document.addEventListener("scroll", e => {
      const presentPosition = window.pageYOffset;
      let active = false;
      if (presentPosition > 200) active = true;
      this.setState({ active });
    });
  }
  componentDidMount() {
    this.navigationListener();
  }

  render() {
    const { navOpen } = this.state;
    const toogleHamburger = this.toogleHamburger;
    return (
      <StyledWrapper active={this.state.active}>
        <StyledNavLinkLogo to="/home">
          <Logo />
        </StyledNavLinkLogo>
        <StyledNavLinksWrapper active={navOpen}>
          <StyledNavLink onClick={toogleHamburger} to="/home">
            strona główna
          </StyledNavLink>
          <StyledNavLink onClick={toogleHamburger} to="/about">
            o cbd
          </StyledNavLink>
          <StyledNavLink onClick={toogleHamburger} to="/products">
            nasze produkty
          </StyledNavLink>
          <StyledNavLink onClick={toogleHamburger} to="/shopcart">
            <Icon small urlIcon={shopCartIcon} />
          </StyledNavLink>
        </StyledNavLinksWrapper>
        <Hamburger toogleHamburger={toogleHamburger} active={navOpen} />
      </StyledWrapper>
    );
  }
}

export default Navigation;
