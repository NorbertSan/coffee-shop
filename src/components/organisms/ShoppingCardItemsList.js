import React from "react";
import styled from "styled-components";
import ShoppingCardItem from "components/molecules/ShoppingCardItem";
import { connect } from "react-redux";

const StyledWrapper = styled.ul`
  margin: 0;
  padding: 0;
  width: 80%;
`;

const ShoppingCardItemsList = ({ list }) => (
  <StyledWrapper>
    {list.map((item, index) => (
      <ShoppingCardItem
        key={`shopitem: ${item.id}`}
        id={item.id}
        price={item.price}
        image={item.image}
        label={item.label}
        amount={item.amount}
      />
    ))}
  </StyledWrapper>
);

const mapStateToProps = state => ({
  list: state.shoppingCart.list
});

export default connect(mapStateToProps)(ShoppingCardItemsList);
