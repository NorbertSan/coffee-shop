import React from "react";
import styled from "styled-components";
import ProductsItemList from "components/organisms/ProductsItemList";
import ShoppingCard from "components/organisms/ShoppingCard";

const StyledWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 60px;
  position: relative;
  display: grid;
  grid-template-columns: 4fr 1fr;
  justify-items: center;
  align-items: flex-start;
`;

const ProductsSection = () => (
  <>
    <StyledWrapper>
      <ProductsItemList />
      <ShoppingCard />
    </StyledWrapper>
  </>
);

export default ProductsSection;
