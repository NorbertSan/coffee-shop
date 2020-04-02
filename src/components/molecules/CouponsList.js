import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Coupon from "components/molecules/Coupon";
import ItemLabel from "components/atoms/ItemLabel";
import theme from "theme";

const StyledWrapper = styled.div`
  padding: 5px 15px;
`;
const StyledItemLabel = styled(ItemLabel)`
  margin: 0;
  margin-bottom: 10px;
  padding: 0;
  list-style: none;
`;
const StyledAlert = styled.div`
  color: red;
  font-size: ${theme.fontSize.xs};
  padding: 0px 15px 15px 15px;
`;

const CouponsList = ({ coupons, couponAlert }) => (
  <>
    {couponAlert && (
      <StyledAlert>Wprowadzono błędny kod lub już jest aktywowany</StyledAlert>
    )}
    {coupons.length > 0 && (
      <StyledWrapper>
        <StyledItemLabel as="ul">Dodane kupony :</StyledItemLabel>
        {coupons.map(coupon => (
          <Coupon coupon={coupon} />
        ))}
      </StyledWrapper>
    )}
  </>
);

const mapStateToProps = state => ({
  coupons: state.shoppingCart.coupons,
  couponAlert: state.shoppingCart.couponAlert
});

export default connect(mapStateToProps)(CouponsList);
