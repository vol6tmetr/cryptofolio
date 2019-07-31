import React, { Component } from 'react'

export default class Portfolio extends Component {
  removeCurrency = (event, item_id, item_name, amount) => {
    event.preventDefault();

    console.log(item_id, item_name);

    this.props.removeCurrency(item_id, item_name, amount);
  }

  render() {
    const portfolio_price = <h5>Portfolio price: {this.props.price}</h5>
    const portfolio =
      <table>
        <thead>
          <tr>
            <th>Currency Name</th>
            <th>Currency Amount</th>
            <th>Added at</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { this.props.portfolio.map((portfolio_item) =>
            <tr key={portfolio_item.id}>
              <td>{ portfolio_item.name }</td>
              <td>{ portfolio_item.amount }</td>
              <td>{ new Date(portfolio_item.created_at).toString() }</td>
              <td><button onClick={(event) => this.removeCurrency(event, portfolio_item.id, portfolio_item.name, portfolio_item.amount)}>Remove</button></td>
            </tr>
          ) }
        </tbody>
      </table>

    if (this.props.portfolio.length === 0) {
      return(
        <div>
          { portfolio_price }
        </div>
      )
    } else {
      return(
        <div>
          { portfolio_price }
          { portfolio }
        </div>
      )
    }
  }
}