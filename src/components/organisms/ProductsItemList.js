import React from "react";
import styled from "styled-components";
import ProductItem from "components/molecules/ProductItem";
import SearchInput from "components/atoms/SearchInput";
import ProductsPageNavigation from "components/molecules/ProductsPageNavigation";
import { products } from "initialData";

const StyledSearchInput = styled(SearchInput)`
  position: absolute;
  top: 0;
  left: 0%;
`;

const StyledWrapper = styled.ul`
  display: grid;
  position: relative;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  grid-gap: 15px;
  margin: 0;
  padding: 0;
  padding-top: 50px;
`;

class ProductsItemList extends React.Component {
  state = {
    currentPage: 1,
    allProducts: products.length,
    productsPerPage: 8
  };
  changePage = type => {
    let { currentPage, allProducts, productsPerPage } = this.state;
    if (type === "prev" && currentPage > 1)
      this.setState(prevState => ({ currentPage: prevState.currentPage-- }));
    else if (
      type === "next" &&
      Math.ceil(allProducts / productsPerPage) > currentPage
    )
      this.setState(prevState => ({ currentPage: prevState.currentPage++ }));
  };
  filterItem = () => {
    let { currentPage, productsPerPage } = this.state;
    return products.slice(
      (currentPage - 1) * productsPerPage,
      currentPage * productsPerPage || products.length
    );
  };

  render() {
    const { currentPage, allProducts, productsPerPage } = this.state;
    return (
      <StyledWrapper>
        <StyledSearchInput placeholder="Wyszukaj produkt ..." />
        {this.filterItem().map((product, index) => (
          <ProductItem
            key={`product: ${index}`}
            price={product.price}
            label={product.label}
            type={product.type}
            image={product.image}
          />
        ))}
        <ProductsPageNavigation
          currentPage={currentPage}
          changePage={this.changePage}
          maxPage={Math.ceil(allProducts / productsPerPage)}
        />
      </StyledWrapper>
    );
  }
}

export default ProductsItemList;
