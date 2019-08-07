import React, { Component } from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

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
      <form>
        <Grid container justify="center">
          <TextField label="Email" type="text" name="email" value={this.state.email} onChange={this.handleChange} />
        </Grid>
        <Grid container justify="center">
          <TextField label="Password" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        </Grid>
        <Grid container justify="center">
          <Button variant="contained" color="primary" value="Authorize" style={{ margin: 15 }} onClick={this.handleAuthorization}>Login</Button>
        </Grid>
      </form>
    )
  }
}