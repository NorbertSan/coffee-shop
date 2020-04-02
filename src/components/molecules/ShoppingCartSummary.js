import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Title from "components/atoms/Title";
import theme from "theme";
import Button from "components/atoms/Button";

const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 50px;
`;
const StyledTitle = styled(Title)`
  font-size: ${theme.fontSize.m};
`;
const StyledButton = styled(Button)`
  margin: 4px 0;
  width: 200px;
`;

class ShoppingCartSummary extends React.Component {
  state = {
    redirect: false
  };
  setRedirect = () => this.setState({ redirect: true });

  render() {
    const { finalPrice } = this.props;
    const { redirect } = this.state;
    const setRedirect = this.setRedirect;
    return (
      <>
        {redirect && <Redirect to="/shopcart" />}
        <StyledWrapper>
          <StyledTitle>
            Kwota: <span>{`${parseFloat(finalPrice).toFixed(2)} zł`}</span>
          </StyledTitle>
          <StyledButton secondary onClick={setRedirect}>
            zobacz koszyk
          </StyledButton>
        </StyledWrapper>
      </>
    );
  }
}

const mapStateToProps = state => ({
  finalPrice: state.shoppingCart.finalPrice
});

export default connect(mapStateToProps)(ShoppingCartSummary);
