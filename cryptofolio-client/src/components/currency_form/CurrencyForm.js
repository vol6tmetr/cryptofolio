import React, { Component } from 'react'

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
        <input value={this.state.amount} onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Add</button>
      </form>
    )
  }
}