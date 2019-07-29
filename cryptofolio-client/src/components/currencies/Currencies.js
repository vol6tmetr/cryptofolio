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
    const listCurrencies = this.state.currencies.map((currency) =>
      <li key={currency.symbol}>{ currency.symbol + " " + currency.name + " " + currency.price + " " + currency.market_cap }</li>
    );

    return(<ul>{listCurrencies}</ul>)
  }
}