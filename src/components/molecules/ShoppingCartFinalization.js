import React from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Title from "components/atoms/Title";
import ItemLabel from "components/atoms/ItemLabel";
import Button from "components/atoms/Button";
import theme from "theme";
import infoIcon from "assets/icons/info.svg";

const StyledWrapper = styled.div`
  width: 60%;
  border: 1px solid ${theme.primaryColor};
  margin-left: auto;
  margin-top: 50px;
  @media screen and (max-width: ${theme.mediaQueries.phone}) {
    width: 100%;
  }
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
  ${({ info }) =>
    info &&
    css`
      position: relative;
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 70px;
        width: 15px;
        height: 15px;
        background: url(${infoIcon}) no-repeat center / cover;
        transform: translateY(-50%);
      }
      &:before {
        content: "Darmowa dostawa od 100 zł";
        text-transform: none;
        position: absolute;
        font-size: ${theme.fontSize.xs};
        font-weight: ${theme.fontWeight.regular};
        display: flex;
        align-items: center;
        justify-content: center;
        width: 220px;
        height: 30px;
        background: ${theme.primaryColor};
        color: ${theme.whiteColor};
        border-radius: 10px;
        left: 40px;
        top: -50px;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      }
      &:hover:before {
        opacity: 1;
      }
    `}
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
  display: block;
  width: 100%;
  text-decoration: none;
  color: ${theme.whiteColor};
  line-height: 100%;
  text-align: center;
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
  freeDelivery = finalPrice => parseFloat(finalPrice) >= 100;

  render() {
    const { finalPrice } = this.props;
    const { onDelivery, price, consingment } = this.state;
    const inputChange = this.inputChange;
    const freeDelivery = this.freeDelivery;
    return (
      <StyledWrapper>
        <StyledTitle>Podsumowanie koszyka</StyledTitle>
        <StyledInnerWrapper>
          <StyledItem>
            <StyledItemLabel>Kwota</StyledItemLabel>
            <ItemLabel>{parseFloat(finalPrice).toFixed(2)} zł</ItemLabel>
          </StyledItem>
          <StyledItem>
            <StyledItemLabel info>Wysyłka</StyledItemLabel>
            <StyledConsingmentWrapper>
              <label>
                <StyledInput
                  type="radio"
                  name="consingment"
                  value={freeDelivery(finalPrice) ? 0 : 13}
                  onChange={e => inputChange(e)}
                  checked={consingment}
                />
                Przesyłka kurierska
                {freeDelivery(finalPrice) ? "0.00" : "13.00"} zł
              </label>
              <label>
                <StyledInput
                  type="radio"
                  name="consingment"
                  value={freeDelivery(finalPrice) ? 0 : 20}
                  onChange={e => inputChange(e)}
                  checked={onDelivery}
                />
                Za pobraniem(kurier){" "}
                {freeDelivery(finalPrice) ? "0.00" : "20.00"} zł
              </label>
            </StyledConsingmentWrapper>
          </StyledItem>
          <StyledItem>
            <StyledItemLabel>Suma</StyledItemLabel>
            <ItemLabel>
              {(parseFloat(finalPrice) + price).toFixed(2)} zł
            </ItemLabel>
          </StyledItem>
        </StyledInnerWrapper>
        <Link as={Link} to="/finalization">
          <StyledButton secondary>przejdź do kasy</StyledButton>
        </Link>
      </StyledWrapper>
    );
  }
}

const mapStateToProps = state => ({
  finalPrice: state.shoppingCart.finalPrice
});

export default connect(mapStateToProps)(ShoppingCartFinalization);
