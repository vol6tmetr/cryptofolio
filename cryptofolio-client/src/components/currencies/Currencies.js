import React, {Component} from 'react';
import axios from 'axios';

export default class Currencies extends Component {
  state = {
    currencies: []
  }

  componentDidMount = () => {
      axios.get("http://localhost:3001/api/v1/currencies", { headers: { 'Authorization': this.props.auth_token }  }).then(data => {
          console.log(data)
          this.setState({ currencies: data.data })
      })
  }

  render() {
    const listCurrencies =
      <table>
        <tr>
          <th>Currency Symbol</th>
          <th>Currency Name</th>
          <th>Currency Price</th>
          <th>Currency Market cap</th>
        </tr>
        { this.state.currencies.map((currency) =>
          <tr key={currency.symbol}>
            <td>{ currency.symbol }</td>
            <td>{ currency.name }</td>
            <td>{ currency.price }</td>
            <td>{ currency.market_cap }</td>
          </tr>
        )}
      </table>

    return(<div>{ listCurrencies }</div>)
  }
}