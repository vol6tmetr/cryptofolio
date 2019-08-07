import React, {Component} from 'react';
import axios from 'axios';

import CurrencyForm from '../currency_form/CurrencyForm'

import TableSort from '../../helpers/TableSort'

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

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
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell onClick={() => this.handleStringsSort('symbol')}>Currency Symbol</TableCell>
              <TableCell onClick={() => this.handleStringsSort('name')}>Currency Name</TableCell>
              <TableCell onClick={() => this.handleNumbersSort('price')}>Currency Price</TableCell>
              <TableCell onClick={() => this.handleNumbersSort('market_cap')}>Currency Market cap</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { this.state.currencies.map((currency) =>
              <TableRow key={currency.symbol}>
                <TableCell>{ currency.symbol }</TableCell>
                <TableCell>{ currency.name }</TableCell>
                <TableCell>{ currency.price }</TableCell>
                <TableCell>{ currency.market_cap }</TableCell>
                <TableCell><CurrencyForm name={currency.name} handleClick={this.handleClick} /></TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>

    return(<div>{ listCurrencies }</div>)
  }
}