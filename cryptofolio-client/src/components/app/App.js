import React from 'react';

import axios from 'axios'

import Registration from '../registration/Registration'
import Authetication from '../authetication/Authentication'
import Logout from '../logout/Logout'
import Portfolio from '../portfolio/Portfolio'
import Currencies from '../currencies/Currencies';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export default class App extends React.Component {
  state = {
    auth_token: "",
    email: "",
    portfolio: [],
    portfolio_price: 0
  }

  handleAuthorization = (email, password) => {
    axios.post('http://localhost:3001/api/v1/authenticate', {
      email: email,
      password: password
    }).then(data => {
        this.setState({ auth_token: data.data.auth_token, email: data.data.email, portfolio: data.data.portfolio })
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  handleLogout = () => {
    this.setState({ auth_token: "" })
  }

  handleClick = (name, amount) => {
    axios.post("http://localhost:3001/api/v1/portfolio", { name, amount }, { headers: { 'Authorization': this.state.auth_token } }).then(data => {
      console.log(data)

      this.setState({ portfolio: data.data.portfolio, portfolio_price: data.data.price })
  })
  }

  removeCurrency = (item_id, item_name, amount) => {
    console.log("Removing" + item_id);

    axios.delete('http://localhost:3001/api/v1/portfolio/currency', { headers: { 'Authorization': this.state.auth_token }, data: { item_id, item_name, amount }}).then(data => {
      console.log(data);

      this.setState({ portfolio: data.data.portfolio, portfolio_price: data.data.price })
    });
  }

  handleRegistration = (name, email, password) => {
    console.log(name + " " + email + " " + password)

    axios.post('http://localhost:3001/api/v1/registration', { name, email, password }).then(data => {
      console.log(data)

      this.setState({ auth_token: data.data.auth_token, email: data.data.email, portfolio: data.data.portfolio })
    });
  }

  render() {
    if (this.state.auth_token) {
      return(
        <Container maxWidth="lg">
          <Logout email={this.state.email} logout={this.handleLogout}/>
          <Portfolio email={this.state.email} auth_token={this.state.auth_token} portfolio={this.state.portfolio} price={this.state.portfolio_price} removeCurrency={this.removeCurrency}/>
          <Currencies auth_token={this.state.auth_token} handleClick={this.handleClick}/>
        </Container>
      )
    } else {
      return(
        <Container maxWidth="md">
          <Typography variant="h3" align="center" style={{ margin: 15 }}>Welcome to the cryptofolio!</Typography>
          <Typography variant="h5" align="center" style={{ marginBottom: 15 }}>Register</Typography>
          <Registration handleRegistration={this.handleRegistration}/>
          <Typography variant="h5" align="center" style={{ margin: 15 }}>Login</Typography>
          <Authetication handleAuthorization={this.handleAuthorization}/>
        </Container>
      )
    }
  }
}
