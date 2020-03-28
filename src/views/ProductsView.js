import React from "react";
import styled, { keyframes } from "styled-components";
import HeroImage from "components/atoms/HeroImage";
import HeroImageContainer from "components/atoms/HeroImageContainer";
import productsImage from "assets/images/photo3.jpg";
import ProductsSection from "components/organisms/ProductsSection";

const appear = keyframes`
  0%{
    opacity:0.5;
    transform:translateX(50px);
  } 100%{
    opacity:1;
  }
`;
const StyledWrapper = styled.div`
  animation: ${appear} 0.3s ease-in-out;
`;
const StyledHeroImageContainer = styled(HeroImageContainer)`
  height: 20vh;
`;

class ProductsView extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <StyledWrapper>
        <StyledHeroImageContainer>
          <HeroImage src={productsImage} active alt="producst view" />
        </StyledHeroImageContainer>
        <ProductsSection />
      </StyledWrapper>
    );
  }
}

export default ProductsView;
