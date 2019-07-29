import React, { Component } from 'react'

export default class Portfolio extends Component {
  render() {
    const portfolio =
      <table>
        <thead>
          <tr>
            <th>Currency Name</th>
            <th>Currency Amount</th>
          </tr>
        </thead>
        <tbody>
          { this.props.portfolio.map((portfolio_item) =>
            <tr>
              <td>{ portfolio_item.name }</td>
              <td>{ portfolio_item.amount }</td>
            </tr>
          ) }
        </tbody>
      </table>

    return(
      <div>{ portfolio }</div>
    )
  }
}