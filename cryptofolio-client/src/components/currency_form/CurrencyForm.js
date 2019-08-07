import React, { Component } from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class CurrencyForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      amount: ""
    }
  }

  handleChange = (event) => {
    event.preventDefault();

    this.setState({ amount: event.target.value });
  }

  handleClick = (event) => {
    event.preventDefault();

    this.props.handleClick(this.props.name, this.state.amount);

    this.setState({ amount: "" })
  }

  render() {
    return(
      <form>
        <TextField value={this.state.amount} onChange={this.handleChange} style={{ marginRight: 20 }}></TextField>
        <Button variant="contained" color="primary" onClick={this.handleClick}>Add</Button>
      </form>
    )
  }
}