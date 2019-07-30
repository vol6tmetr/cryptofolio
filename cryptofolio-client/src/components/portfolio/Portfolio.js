import React, { Component } from 'react'

export default class Portfolio extends Component {
  removeCurrency = (event, item_id) => {
    event.preventDefault();

    console.log(item_id);

    this.props.removeCurrency(item_id);
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
              <td><button onClick={(event) => this.removeCurrency(event, portfolio_item.id)}>Remove</button></td>
            </tr>
          ) }
        </tbody>
      </table>

    return(
      <div>{ portfolio }</div>
    )
  }
}