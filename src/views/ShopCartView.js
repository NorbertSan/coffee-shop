import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ShoppingCardTable from "components/organisms/ShoppingCardTable";
import Title from "components/atoms/Title";
import ItemLabel from "components/atoms/ItemLabel";
import Icon from "components/atoms/Icon";
import shoppingCartIcon from "assets/icons/shopCart.svg";
import theme from "theme";

const StyledWrapper = styled.section`
  top: 20vh;
  width: 60%;
  margin: 200px auto 100px;
`;
const StyledHeading = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 40%;
    transform: translateX(-50%);
    height: 3px;
    background: ${theme.primaryColor};
    border-radius: 50px;
  }
`;
const StyledIcon = styled(Icon)`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;
const StyledInnerWrapper = styled.div`
  margin-top: 60px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
const StyledItemLabel = styled(ItemLabel)`
  font-style: italic;
  cursor: pointer;
`;

class ShopCartView extends React.Component {
  state = {
    redirect: false
  };
  setRedirect = () => this.setState({ redirect: true });

  render() {
    const { list } = this.props;
    const { redirect } = this.state;
    const setRedirect = this.setRedirect;
    return (
      <>
        {redirect && <Redirect to="/products" />}
        <StyledWrapper>
          <StyledHeading>
            <StyledIcon urlIcon={shoppingCartIcon} />
            <Title>Koszyk</Title>
          </StyledHeading>
          {list.length > 0 ? (
            <ShoppingCardTable />
          ) : (
            <>
              <StyledInnerWrapper>
                <Title>Koszyk jest pusty</Title>
                <StyledItemLabel onClick={setRedirect}>
                  Wróć do sklepu
                </StyledItemLabel>
              </StyledInnerWrapper>
            </>
          )}
        </StyledWrapper>
      </>
    );
  }
}

const mapStateToProps = state => ({
  list: state.shoppingCart.list
});

export default connect(mapStateToProps)(ShopCartView);
