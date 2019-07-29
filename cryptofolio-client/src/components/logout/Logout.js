import React, { Component } from 'react'

export default class Logout extends Component {
  handleLogout = () => {
    this.props.logout()
  }

  render() {
    return(
      <div>
        <h5>Logged in as: {this.props.email}</h5>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }
}