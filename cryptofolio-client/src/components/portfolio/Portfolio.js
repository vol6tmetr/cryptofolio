import React, { Component } from 'react'

export default class Portfolio extends Component {
  removeCurrency = (event, item_id, item_name, amount) => {
    event.preventDefault();

    console.log(item_id, item_name);

    this.props.removeCurrency(item_id, item_name, amount);
  }

  render() {
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
            <tr>
              <td>{ portfolio_item.name }</td>
              <td>{ portfolio_item.amount }</td>
              <td>{ new Date(portfolio_item.created_at).toString() }</td>
              <td><button onClick={(event) => this.removeCurrency(event, portfolio_item.id, portfolio_item.name, portfolio_item.amount)}>Remove</button></td>
            </tr>
          ) }
        </tbody>
      </table>

    return(
      <div>
        <h5>Portfolio price: {this.props.price}</h5>
        { portfolio }
      </div>
    )
  }
}