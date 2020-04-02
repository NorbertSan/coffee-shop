import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import ProductItem from "components/molecules/ProductItem";
import SearchInput from "components/atoms/SearchInput";
import Title from "components/atoms/Title";
import ProductsPageNavigation from "components/molecules/ProductsPageNavigation";
import { filterProducts } from "actions/productsActions";
import theme from "theme";


const StyledWrapper = styled.ul`
  display: grid;
  position: relative;
  grid-template-columns: repeat(auto-fit,minmax(100px,300px));
  width: 100%;
  justify-content:center;
  grid-gap: 15px;
  padding: 0;
  padding-top: 120px;
`;

const StyledTitle = styled(Title)`
  width:100%;
  text-align:center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${theme.fontSize.m};
  text-transform: uppercase;
  text-align:center;
  @media screen and (max-width:${theme.mediaQueries.tablet}){
    font-size:${theme.fontSize.s};
  }
`;
const StyledAlert = styled.div`
  font-size: ${theme.fontSize.m};
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 60px;
    @media screen and (max-width:${theme.mediaQueries.tablet}){
    font-size:${theme.fontSize.xs};
  }
`;
const StyledInputWrapper = styled.div`
  position:absolute;
  width:200px;
  @media screen and (max-width:${theme.mediaQueries.tablet}){
  transform:translateX(-50%);
  left:50%;
  top:-50px;
  }
`

class ProductsItemList extends React.Component {
  state = {
    currentPage: 1,
    productsPerPage: 8
  };
  changePage = type => {
    let { currentPage, productsPerPage } = this.state;
    const { filteredItems } = this.props;
    if (type === "prev" && currentPage > 1)
      this.setState(prevState => ({ currentPage: prevState.currentPage-- }));
    else if (
      type === "next" &&
      Math.ceil(filteredItems.length / productsPerPage) > currentPage
    )
      this.setState(prevState => ({ currentPage: prevState.currentPage++ }));
  };
  filterItems = products => {
    let { currentPage, productsPerPage } = this.state;
    return products.slice(
      (currentPage - 1) * productsPerPage,
      currentPage * productsPerPage || products.length
    );
  };
  componentDidMount() {
    this.props.filterProducts("");
  }
  componentDidUpdate(newProps) {
    if (newProps.filteredItems !== this.props.filteredItems)
      this.setState({ currentPage: 1 });
  }

  render() {
    const { currentPage, productsPerPage } = this.state;
    const { filteredItems, filterType } = this.props;
    return (
      <StyledWrapper>
        <StyledTitle>
          {filterType === "" ? "Wszystkie produkty" : filterType}
        </StyledTitle>
        <StyledInputWrapper>
        <SearchInput placeholder="Wyszukaj produkt ..." />
      
        </StyledInputWrapper>
        {filteredItems.length > 0 ? (
          <>
            <StyledAlert>{`Znaleziono ${filteredItems.length} produktów`}</StyledAlert>
            {this.filterItems(filteredItems).map(product => (
              <ProductItem
                key={product.id}
                id={product.id}
                price={product.price}
                label={product.label}
                type={product.type}
                image={product.image}
              />
            ))}
          </>
        ) : (
          <StyledAlert>Obecnie brak przedmiotów na magazynie</StyledAlert>
        )}

        <ProductsPageNavigation
          currentPage={currentPage}
          changePage={this.changePage}
          maxPage={Math.ceil(filteredItems.length / productsPerPage)}
        />
      </StyledWrapper>
    );
  }
}

const mapStateToProps = state => ({
  filteredItems: state.products.filteredItems,
  filterType: state.products.filterType
});

export default connect(mapStateToProps, { filterProducts })(ProductsItemList);
