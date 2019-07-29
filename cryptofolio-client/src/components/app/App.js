import React from 'react';

import axios from 'axios'

import Authetication from '../authetication/Authentication'
import Logout from '../logout/Logout'
import Portfolio from '../portfolio/Portfolio'
import Currencies from '../currencies/Currencies';

export default class App extends React.Component {
  state = {
    auth_token: "",
    email: ""
  }

  handleAuthorization = (email, password) => {
    axios.post('http://localhost:3001/api/v1/authenticate', {
      email: email,
      password: password
    }).then(data => {
        this.setState({ auth_token: data.data.auth_token, email: data.data.email })
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  handleLogout = () => {
    this.setState({ auth_token: "" })
  }

  render() {
    if (this.state.auth_token) {
      return(
        <div>
          <Logout email={this.state.email} logout={this.handleLogout}/>
          <Portfolio email={this.state.email} auth_token={this.state.auth_token} />
          <Currencies auth_token={this.state.auth_token}/>
        </div>
      )
    } else {
      return(
        <Authetication handleAuthorization={this.handleAuthorization}/>
      )
    }
  }
}
