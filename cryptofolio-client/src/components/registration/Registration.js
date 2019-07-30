import React, { Component } from 'react'

export default class Registation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleRegistrationFormChange = (event) => {
    event.preventDefault();

    this.setState({ [event.target.name]: event.target.value })
  }

  handleRegistration = (event) => {
    event.preventDefault();

    this.props.handleRegistration(this.state.name, this.state.email, this.state.password)
  }

  render() {
    return(
      <form>
        <label>Name</label>
        <input name='name' value={this.state.name} onChange={this.handleRegistrationFormChange}></input>
        <label>Email</label>
        <input name='email' type='email' value={this.state.email} onChange={this.handleRegistrationFormChange}></input>
        <label>Password</label>
        <input name='password' type='password' value={this.state.password} onChange={this.handleRegistrationFormChange}></input>
        <button onClick={this.handleRegistration}>Register</button>
      </form>
    )
  }
}