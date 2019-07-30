import React from 'react';

import axios from 'axios'

import Authetication from '../authetication/Authentication'
import Logout from '../logout/Logout'
import Portfolio from '../portfolio/Portfolio'
import Currencies from '../currencies/Currencies';

export default class App extends React.Component {
  state = {
    auth_token: "",
    email: "",
    portfolio: []
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
    axios.post("http://localhost:3001/api/v1/portfolio", { name, amount, email: this.state.email }, { headers: { 'Authorization': this.state.auth_token } }).then(data => {
      console.log(data)
      this.setState({ portfolio: data.data })
  })
  }

  removeCurrency = (item_id) => {
    console.log("Removing" + item_id);

    axios.delete('http://localhost:3001/api/v1/portfolio/currency', { headers: { 'Authorization': this.state.auth_token }, data: { item_id, email: this.state.email }}).then(data => {
      console.log(data);
      this.setState({ portfolio: data.data })
    });
  }

  render() {
    if (this.state.auth_token) {
      return(
        <div>
          <Logout email={this.state.email} logout={this.handleLogout}/>
          <Portfolio email={this.state.email} auth_token={this.state.auth_token} portfolio={this.state.portfolio} removeCurrency={this.removeCurrency} />
          <Currencies email={this.state.email} auth_token={this.state.auth_token} handleClick={this.handleClick}/>
        </div>
      )
    } else {
      return(
        <Authetication handleAuthorization={this.handleAuthorization}/>
      )
    }
  }
}
