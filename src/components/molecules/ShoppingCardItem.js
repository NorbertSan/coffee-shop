import React from "react";
import styled from "styled-components";
import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import ItemLabel from "components/atoms/ItemLabel";
import Icon from "components/atoms/Icon";
import closeIcon from "assets/icons/close.svg";
import theme from "theme";

const StyledWrapper = styled.li`
  margin-top: 50px;
  list-style: none;
  padding: 0;
  border-bottom: 1px solid ${theme.primaryColor};
  padding-bottom: 20px;
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledIcon = styled(Icon)`
  border: none;
  margin-right: 30px;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;
const StyledItemLabel = styled(ItemLabel)`
  margin-top: 8px;
  font-weight: ${theme.fontWeight.medium};
`;

const ShoppingCardItem = () => (
  <StyledWrapper>
    <StyledInnerWrapper>
      <StyledIcon small as="button" urlIcon={closeIcon} />
      <StyledInfo>
        <ItemLabel>BIBUŁKI OCB BLACK KING</ItemLabel>
        <StyledItemLabel>
          <span>3x </span>3.99 zł
        </StyledItemLabel>
      </StyledInfo>
    </StyledInnerWrapper>
  </StyledWrapper>
);

export default ShoppingCardItem;
