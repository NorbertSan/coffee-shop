import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import theme from "theme";
import HeroImage from "components/atoms/HeroImage";
import HeroImageContainer from "components/atoms/HeroImageContainer";
import productsImage from "assets/images/photo3.jpg";
import ItemLabel from "components/atoms/ItemLabel";
import Title from "components/atoms/Title";
import ShopCartAddForm from "components/molecules/ShopCartAddForm";
import DetailsPageDescription from "components/molecules/DetailsPageDescription";
import Icon from "components/atoms/Icon";
import backwardIcon from "assets/icons/backward.svg";
import { addProduct } from "actions/shoppingActions";

const StyledWrapper = styled.section`
  position: relative;
  padding-bottom: 50px;
`;
const StyledIcon = styled(Icon)`
  cursor: pointer;
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
`;
const StyledHeroImageContainer = styled(HeroImageContainer)`
  height: 20vh;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: space-around;
`;

const StyledImg = styled.img`
  width: 60%;
  object-fit: contain;
`;
const StyledInnerWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 60%;
  grid-gap: 50px;
  justify-items: center;
  margin: 50px auto 0;
  @media screen and (max-width: ${theme.mediaQueries.tablet}) {
    width: 90%;
  }
  @media screen and (max-width: ${theme.mediaQueries.phone}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    * {
      margin: 10px 0;
    }
  }
`;
const StyledTitle = styled(Title)`
  text-transform: uppercase;
  @media screen and (max-width: ${theme.mediaQueries.tablet}) {
    font-size: ${theme.fontSize.m};
  }
`;

class DetailsPageTemplate extends React.Component {
  state = {
    redirect: false
  };
  filterItemFunc = () => {
    const { products, id } = this.props;
    const [filterItem] = products.filter(product => product.id === id);
    return filterItem;
  };
  setRedirect = () => this.setState({ redirect: true });
  render() {
    const { id } = this.props;
    const { redirect } = this.state;
    const setRedirect = this.setRedirect;
    const filterItemFunc = this.filterItemFunc;
    const filterItem = filterItemFunc();
    if (!filterItem) setRedirect();
    return (
      <>
        {redirect && <Redirect to="/products" />}
        {filterItem && (
          <StyledWrapper>
            <StyledHeroImageContainer>
              <HeroImage src={productsImage} active alt="producst view" />
            </StyledHeroImageContainer>
            <StyledInnerWrapper>
              <StyledIcon urlIcon={backwardIcon} onClick={setRedirect} />
              <StyledImg src={filterItem.image} alt="single product" />
              <StyledInfo>
                <StyledTitle>{filterItem.label}</StyledTitle>
                <ItemLabel>{filterItem.price.toFixed(2)} zł</ItemLabel>
                <ShopCartAddForm
                  setRedirect={setRedirect}
                  product={filterItem}
                />
                <ItemLabel>
                  Tagi:
                  {filterItem.type.map(tag => ` ${tag}, `)}
                </ItemLabel>
              </StyledInfo>
              <DetailsPageDescription id={id} />
            </StyledInnerWrapper>
          </StyledWrapper>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(mapStateToProps, { addProduct })(DetailsPageTemplate);
