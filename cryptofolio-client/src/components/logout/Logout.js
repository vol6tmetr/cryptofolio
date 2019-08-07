import React, { Component } from 'react'

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default class Logout extends Component {
  handleLogout = () => {
    this.props.logout()
  }

  render() {
    return(
      <div>
        <Grid container justify="center">
          <Typography variant="h6" align="center" style={{ margin: 15 }}>Logged in as: {this.props.email}</Typography>
        </Grid>
        <Grid container justify="center">
          <Button variant="contained" color="primary" onClick={this.handleLogout}>Logout</Button>
        </Grid>
      </div>
    )
  }
}