import React, { Component } from 'react'

export default class Authentication extends Component {
  state = {
    email: "",
    password: "",
  }

  handleChange = (event) => {
    event.preventDefault();

    this.setState({ [event.target.name]: event.target.value });
  }

  handleAuthorization = (event) => {
    event.preventDefault();

    this.props.handleAuthorization(this.state.email, this.state.password);

    this.setState({ email: '', password: '' })
  }

  render() {
    return(
      <div className="authorization">
        <form>
          <label>
            Email:
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          <button value="Authorize" onClick={this.handleAuthorization}>Authorize</button>
        </form>
      </div>
    )
  }
}