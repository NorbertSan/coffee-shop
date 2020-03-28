import React from "react";
import styled from "styled-components";
import theme from "theme";
import Downshift from "downshift";
import { connect } from "react-redux";
import { filterProducts } from "actions/productsActions";
import { types } from "initialData";

const items = [];
const values = Object.values(types);
values.forEach(value => items.push({ value }));

const StyledInput = styled.input`
  padding: 12px 25px;
  border-radius: 30px;
  background: ${theme.whiteColor};
  border: 1px solid ${theme.primaryColor};
  outline: none;
`;
const StyledLi = styled.li`
  padding: 10px;
  text-transform: capitalize;
  background: ${theme.primaryColor};
  cursor: pointer;
`;
const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid ${theme.primaryColor};
  border-radius: 50px;
  color: white;
`;
const StyledWrapper = styled.div`
  position: absolute;
`;

const SearchInput = ({ filterProducts }) => (
  <StyledWrapper>
    <Downshift
      onChange={selection => {
        if (!selection) filterProducts("");
        else filterProducts(selection.value);
      }}
      itemToString={item => (item ? item.value : "")}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        clearSelection,
        onInputValueChange
      }) => (
        <div>
          <StyledInput
            placeholder="Wyszukaj produkt ..."
            {...getInputProps({
              onChange: e => {
                if (e.target.value === "") {
                  clearSelection();
                }
              }
            })}
          />
          <div>
            <StyledUl {...getMenuProps()}>
              {isOpen
                ? items
                    .filter(
                      item => !inputValue || item.value.includes(inputValue)
                    )
                    .map((item, index) => (
                      <StyledLi
                        {...getItemProps({
                          key: item.value,
                          index,
                          item,
                          style: {
                            backgroundColor:
                              highlightedIndex === index && "lightgray",
                            fontWeight:
                              selectedItem === item ? "bold" : "normal"
                          }
                        })}
                      >
                        {item.value}
                      </StyledLi>
                    ))
                : null}
            </StyledUl>
          </div>
        </div>
      )}
    </Downshift>
  </StyledWrapper>
);
export default connect(null, { filterProducts })(SearchInput);
