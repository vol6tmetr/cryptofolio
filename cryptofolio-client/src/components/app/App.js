import React from 'react';

import axios from 'axios'

import Authetication from '../authetication/Authentication'
import Currencies from '../currencies/Currencies';

export default class App extends React.Component {
  state = {
    auth_token: ""
  }

  handleAuthorization = (email, password) => {
    axios.post('http://localhost:3001/api/v1/authenticate', {
      email: email,
      password: password
    }).then(data => {
        this.setState({ auth_token: data.data.auth_token })
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  render() {
    return(
      <div className="App">
        <Authetication handleAuthorization={this.handleAuthorization}/>
        { this.state.auth_token ? <Currencies auth_token={this.state.auth_token}/> : <h5>Need to authorize to see currencies</h5>}
      </div>
    )
  }
}
