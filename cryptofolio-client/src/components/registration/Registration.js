import React, { Component } from 'react'

import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

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
        <Grid container justify="center">
          <TextField label="Name" name='name' value={this.state.name} onChange={this.handleRegistrationFormChange}></TextField>
        </Grid>
        <Grid container justify="center">
          <TextField label="Email" name='email' type='email' value={this.state.email} onChange={this.handleRegistrationFormChange}></TextField>
        </Grid>
        <Grid container justify="center">
          <TextField label="Password" name='password' type='password' value={this.state.password} onChange={this.handleRegistrationFormChange}></TextField>
        </Grid>
        <Grid container justify="center">
          <Button variant="contained" color="primary" style={{ margin: 15 }} onClick={this.handleRegistration}>Register</Button>
        </Grid>
      </form>
    )
  }
}