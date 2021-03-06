import React from "react";
import { Link } from "react-router-dom";
import ItemLabel from "components/atoms/ItemLabel";
import styled from "styled-components";
import theme from "theme";
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
const StyledLink = styled(Link)`
  color: ${theme.primaryColor};
  text-decoration: none;
`;

const StyledBestsellerLabel = styled(BestsellerLabel)`
  position: absolute;
  top: 0px;
  left: 20px;
`;
const Styledimg = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
  @media screen and (max-width: ${theme.mediaQueries.ipad}) {
    width: 100px;
    height: 150px;
  }
`;

class BestsellerItem extends React.Component {
  state = {
    redirect: false
  };
  setRedirect = () => this.setState({ redirect: true });
  render() {
    const { image, label, id } = this.props;
    return (
      <>
        <StyledLink to={`products/${id}`}>
          <StyledWrapper>
            <StyledBestsellerLabel>bestseller</StyledBestsellerLabel>
            <Styledimg src={image} />
            <ItemLabel>{label}</ItemLabel>
          </StyledWrapper>
        </StyledLink>
      </>
    );
  }
}

export default BestsellerItem;
