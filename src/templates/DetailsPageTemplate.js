import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import HeroImage from "components/atoms/HeroImage";
import HeroImageContainer from "components/atoms/HeroImageContainer";
import productsImage from "assets/images/photo3.jpg";
import ItemLabel from "components/atoms/ItemLabel";
import Title from "components/atoms/Title";
import ShopCartAddForm from "components/molecules/ShopCartAddForm";
import DetailsPageDescription from "components/molecules/DetailsPageDescription";
import Icon from "components/atoms/Icon";
import backwardIcon from "assets/icons/backward.svg";
import { fetchSingleProduct } from "actions/productsActions";
import { addProduct } from "actions/shoppingActions";

const StyledWrapper = styled.section`
  position: relative;
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
  width: 70%;
`;
const StyledInnerWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 60%;
  grid-gap: 50px;
  justify-items: center;
  margin: 50px auto 0;
`;
const StyledTitle = styled(Title)`
  text-transform: uppercase;
`;

class DetailsPageTemplate extends React.Component {
  state = {
    redirect: false
  };
  componentDidMount() {
    const { id } = this.props;
    this.props.fetchSingleProduct(id);
  }

  setRedirect = () => this.setState({ redirect: true });
  render() {
    const { filterItem, id } = this.props;
    const { redirect } = this.state;
    const setRedirect = this.setRedirect;
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
                <ShopCartAddForm setRedirect={setRedirect} id={id} />
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
  filterItem: state.products.filterItem
});

export default connect(mapStateToProps, { fetchSingleProduct, addProduct })(
  DetailsPageTemplate
);
