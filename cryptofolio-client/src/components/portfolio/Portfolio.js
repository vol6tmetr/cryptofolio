import React, { Component } from 'react'

import axios from 'axios'

export default class Portfolio extends Component {
  constructor(props) {
    super(props)

    this.state = {
      portfolio: []
    }
  }

  componentDidMount = () => {
    axios.get('http://localhost:3001/api/v1/portfolio', { headers: { 'Authorization': this.props.auth_token }, params: { email: this.props.email } })
      .then(data => {
        this.setState({ portfolio: data.data })
        console.log(data)
      })
  }

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
          { this.state.portfolio.map((portfolio_item) =>
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