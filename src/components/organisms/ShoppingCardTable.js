import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import ShoppingCardTableItem from "components/molecules/ShoppingCardTableItem";
import Title from "components/atoms/Title";
import theme from "theme";
import ShoppingCartFinalization from "components/molecules/ShoppingCartFinalization";
import Button from "components/atoms/Button";

const StyledWrapper = styled.div`
  margin-top: 80px;
  border: 1px solid ${theme.primaryColor};
  padding: 0;
`;
const StyledLabels = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 20px;
  list-style: none;
  * {
    flex: 3;
    text-align: center;
  }
`;
const StyledLabel = styled(Title)`
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSize.m};
  margin: 0;
  padding: 0;
`;
const StyledCouponsWrapper = styled.div`
  border-top: 1px solid ${theme.primaryColor};
  padding: 15px;
  display: flex;
  align-items: center;
`;
const StyledInput = styled.input`
  padding: 13px;
  margin-right: 15px;
`;

const ShoppingCardTable = ({ list }) => (
  <>
    <StyledWrapper>
      {console.log(list)}
      <StyledLabels>
        <StyledLabel as="li">Produkt</StyledLabel>
        <StyledLabel as="li">Cena</StyledLabel>
        <StyledLabel style={{ flex: 1 }} as="li">
          Ilość
        </StyledLabel>
        <StyledLabel as="li">Suma</StyledLabel>
      </StyledLabels>
      {list.map(product => (
        <ShoppingCardTableItem
          key={product.id + product.amount}
          product={product}
        />
      ))}

      <StyledCouponsWrapper as={"form"}>
        <StyledInput type="text" placeholder="Kod kuponu" />
        <Button secondary>Zastosuj kupon</Button>
      </StyledCouponsWrapper>
    </StyledWrapper>
    <ShoppingCartFinalization />
  </>
);

const mapStateToProps = state => ({
  list: state.shoppingCart.list
});

export default connect(mapStateToProps)(ShoppingCardTable);
