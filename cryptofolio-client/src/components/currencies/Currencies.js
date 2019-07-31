import React, {Component} from 'react';
import axios from 'axios';

import CurrencyForm from '../currency_form/CurrencyForm'

import TableSort from '../../helpers/TableSort'

export default class Currencies extends Component {
  state = {
    currencies: [],
    amount: "",
    sorting: { 'market_cap': 'desc' }
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

  handleStringsSort = (column_name) => {
    this.setState({
      currencies: this.state.currencies.sort((a, b) => {
        return TableSort.compareStrings(a[column_name].toLowerCase(), b[column_name].toLowerCase(), this.state.sorting, column_name);
      }),
      sorting: { [column_name]: TableSort.getSorting(this.state.sorting, column_name) }
    });
  }

  handleNumbersSort = (column_name) => {
    this.setState({
      currencies: this.state.currencies.sort((a, b) => { return TableSort.compareNumbers(a, b, this.state.sorting, column_name) }),
      sorting: { [column_name]: TableSort.getSorting(this.state.sorting, column_name) }
    });
  }

  render() {
    const listCurrencies =
      <table>
        <thead>
          <tr>
            <th onClick={() => this.handleStringsSort('symbol')}>Currency Symbol</th>
            <th onClick={() => this.handleStringsSort('name')}>Currency Name</th>
            <th onClick={() => this.handleNumbersSort('price')}>Currency Price</th>
            <th onClick={() => this.handleNumbersSort('market_cap')}>Currency Market cap</th>
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