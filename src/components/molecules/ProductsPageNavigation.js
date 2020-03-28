import React from "react";
import styled from "styled-components";
import Button from "components/atoms/Button";

const StyledWrapper = styled.div`
  display: flex;
  width: 40%;
  margin: 0 auto;
  justify-content: space-between;
  position: absolute;
  bottom: -100px;
  left: 50%;
  z-index: 999;
  transform: translateX(-50%);
`;

const ProductsPageNavigation = ({ changePage, currentPage, maxPage }) => (
  <StyledWrapper>
    <Button
      disable={currentPage <= 1}
      onClick={() => changePage("prev")}
      small
      secondary
      rounded
    >
      {`Poprzednia strona ${currentPage - 1}`}
    </Button>

    <Button
      disable={currentPage >= maxPage}
      onClick={() => changePage("next")}
      small
      secondary
      rounded
    >
      {`Następna strona ${currentPage + 1}`}
    </Button>
  </StyledWrapper>
);

export default ProductsPageNavigation;
