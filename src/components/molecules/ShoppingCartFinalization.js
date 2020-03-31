import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Title from "components/atoms/Title";
import ItemLabel from "components/atoms/ItemLabel";
import Button from "components/atoms/Button";
import theme from "theme";

const StyledWrapper = styled.div`
  width: 60%;
  border: 1px solid ${theme.primaryColor};
  margin-left: auto;
  margin-top: 50px;
`;
const StyledInnerWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StyledItem = styled.li`
  display: flex;
  align-items: center;
  padding: 30px 15px;
  border-top: 1px solid ${theme.primaryColor};
  * {
    flex: 1;
  }
`;
const StyledTitle = styled(Title)`
  font-size: ${theme.fontSize.m};
  text-align: center;
`;
const StyledItemLabel = styled(ItemLabel)`
  text-transform: capitalize;
`;
const StyledConsingmentWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  * {
    margin: 5px 0;
  }
`;
const StyledInput = styled.input`
  margin-right: 10px;
`;
const StyledButton = styled(Button)`
  width: 100%;
`;

class ShoppingCartFinalization extends React.Component {
  state = {
    price: 13,
    onDelivery: false,
    consingment: true
  };
  inputChange = e => {
    const price = parseFloat(e.target.value);
    this.setState(prevState => ({
      onDelivery: !prevState.onDelivery,
      consingment: !prevState.consingment,
      price
    }));
  };

  render() {
    const { finalPrice } = this.props;
    const { onDelivery, price, consingment } = this.state;
    const inputChange = this.inputChange;
    return (
      <StyledWrapper>
        <StyledTitle>Podsumowanie koszyka</StyledTitle>
        <StyledInnerWrapper>
          <StyledItem>
            <StyledItemLabel>Kwota</StyledItemLabel>
            <ItemLabel>{parseFloat(finalPrice).toFixed(2)} zł</ItemLabel>
          </StyledItem>
          <StyledItem>
            <StyledItemLabel>Wysyłka</StyledItemLabel>
            <StyledConsingmentWrapper>
              <label>
                <StyledInput
                  type="radio"
                  name="consingment"
                  value={13}
                  onChange={e => inputChange(e)}
                  checked={consingment}
                />
                Przesyłka kurierska 13.00 zł
              </label>
              <label>
                <StyledInput
                  type="radio"
                  name="consingment"
                  value={20}
                  onChange={e => inputChange(e)}
                  checked={onDelivery}
                />
                Za pobraniem(kurier) 20.00 zł
              </label>
            </StyledConsingmentWrapper>
          </StyledItem>
          <StyledItem>
            <StyledItemLabel>Suma</StyledItemLabel>
            <ItemLabel>{(parseFloat(finalPrice) + price).toFixed(2)}</ItemLabel>
          </StyledItem>
        </StyledInnerWrapper>
        <StyledButton secondary>przejdź do kasy</StyledButton>
      </StyledWrapper>
    );
  }
}

const mapStateToProps = state => ({
  finalPrice: state.shoppingCart.finalPrice
});

export default connect(mapStateToProps)(ShoppingCartFinalization);
