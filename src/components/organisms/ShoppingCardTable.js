import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addCoupon } from "actions/shoppingActions";
import ShoppingCardTableItem from "components/molecules/ShoppingCardTableItem";
import Title from "components/atoms/Title";
import theme from "theme";
import ShoppingCartFinalization from "components/molecules/ShoppingCartFinalization";
import Button from "components/atoms/Button";
import CouponsList from "components/molecules/CouponsList";

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
  @media screen and (max-width: ${theme.mediaQueries.phone}) {
    font-size: ${theme.fontSize.s};
  }
`;
const StyledCouponsWrapper = styled.div`
  border-top: 1px solid ${theme.primaryColor};
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const StyledInput = styled.input`
  padding: 13px;
  margin-right: 15px;
  height: 30px;
  width: 130px;
`;
const StyledButton = styled(Button)`
  padding: 7px;
`;

class ShoppingCardTable extends React.Component {
  state = {
    value: ""
  };
  changeValue = e => this.setState({ value: e.target.value });
  addCouponFunc = e => {
    e.preventDefault();
    const code = e.target[0].value;
    if (code.length === 0) return;
    this.props.addCoupon(code);
    e.target[0].value = "";
  };
  render() {
    const { list } = this.props;
    const { value } = this.state;
    const addCouponFunc = this.addCouponFunc;
    const changeValue = this.changeValue;
    return (
      <>
        <StyledWrapper>
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

          <StyledCouponsWrapper as={"form"} onSubmit={e => addCouponFunc(e)}>
            <StyledInput
              type="text"
              placeholder="Kod kuponu"
              value={value}
              onChange={e => changeValue(e)}
            />
            <StyledButton type="submit" secondary>
              Zastosuj kupon
            </StyledButton>
          </StyledCouponsWrapper>
          <CouponsList />
        </StyledWrapper>
        <ShoppingCartFinalization />
      </>
    );
  }
}

const mapStateToProps = state => ({
  list: state.shoppingCart.list
});

export default connect(mapStateToProps, { addCoupon })(ShoppingCardTable);
