import React, {Component} from 'react';
import axios from 'axios';

import CurrencyForm from '../currency_form/CurrencyForm'

export default class Currencies extends Component {
  state = {
    currencies: [],
    amount: ""
  }

  componentDidMount = () => {
      axios.get("http://localhost:3001/api/v1/currencies", { headers: { 'Authorization': this.props.auth_token } }).then(data => {
          console.log(data)
          this.setState({ currencies: data.data })
      })
  }

  handleChange = (event) => {
    event.preventDefault();

    this.setState({ amount: event.target.value });
  }

  handleClick = (name, amount) => {
    this.props.handleClick(name, amount)
  }

  render() {
    const listCurrencies =
      <table>
        <thead>
          <tr>
            <th>Currency Symbol</th>
            <th>Currency Name</th>
            <th>Currency Price</th>
            <th>Currency Market cap</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          { this.state.currencies.map((currency) =>
            <tr key={currency.symbol}>
              <td>{ currency.symbol }</td>
              <td>{ currency.name }</td>
              <td>{ currency.price }</td>
              <td>{ currency.market_cap }</td>
              <td><CurrencyForm name={currency.name} handleClick={this.handleClick} /></td>
            </tr>
          )}
        </tbody>
      </table>

    return(<div>{ listCurrencies }</div>)
  }
}