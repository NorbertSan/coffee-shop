import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addProduct } from "actions/shoppingActions";
import Button from "components/atoms/Button";

const StyledInputField = styled.form`
  display: flex;
`;
const StyledInput = styled.input`
  width: 60px;
  padding: 10px;
  margin-right: 15px;
`;
const StyledButton = styled(Button)`
  padding:0 20px;
`

class ShopCartAddForm extends React.Component {
  state = {
    value: 1
  };
  changeValue = e => {
    this.setState({
      value: e.target.value
    });
  };
  addItem = e => {
    e.preventDefault();
    const { product, setRedirect } = this.props;
    const amount = parseInt(e.target[0].value);
    if (Number.isInteger(amount) && amount >= 1) {
      product.amount = amount;
      this.props.addProduct(product);
      setRedirect();
    }
  };
  render() {
    const changeValue = this.changeValue;
    const { value } = this.state;
    const addItem = this.addItem;
    return (
      <StyledInputField onSubmit={e => addItem(e)}>
        <StyledInput
          type="number"
          min="1"
          step="1"
          value={value}
          onChange={e => changeValue(e)}
        />
        <StyledButton type="submit" secondary>
          Dodaj do koszyka
        </StyledButton>
      </StyledInputField>
    );
  }
}

export default connect(null, { addProduct })(ShopCartAddForm);
