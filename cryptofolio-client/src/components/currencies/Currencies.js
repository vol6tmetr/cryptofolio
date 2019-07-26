import React, {Component} from 'react';
import axios from 'axios';

export default class Currencies extends Component {
  state = {
    currencies: []
  }

  componentDidMount = () => {
      axios.get("http://localhost:3001/api/v1/currencies/all", { headers: { 'Authorization': this.props.auth_token }  }).then(data => {
          console.log(data)
          this.setState({ currencies: data.data })
      })
  }

  render() {
    const listCurrencies = this.state.currencies.map((currency) =>
      <li>{currency.id + currency.price_usd}</li>
    );

    return(<ul>{listCurrencies}</ul>)
  }
}