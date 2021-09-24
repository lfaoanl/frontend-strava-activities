import React, { Component } from 'react';
import axios from 'axios';
import includes from 'lodash/includes';
import Card from '../components/Card';
import ButtonInput from '../components/inputs/ButtonInput';
import '../assets/css/page-login.scss';

class Login extends Component {
  static retrieveRefreshToken() {
    // Login for demo purposes
    axios.get('https://faanveldhuijsen.nl/novi-refresh-token.php').then(({ data }) => {
      window.$strava.api.tokenData = data;
      window.location.reload();
    });
  }

  constructor(props) {
    super(props);

    const loading = includes(window.location.search, 'code');

    this.state = {
      loading,
    };
  }

  render() {
    const { loading } = this.state;
    return (
      <main className="login">
        <Card>
          <h1>Login</h1>
          <div className="button-container">
            <ButtonInput label="Login with strava" primary icon="arrow-right" loading={loading} link={window.$strava.authenticateUrl} />
            { includes(window.location.search, 'demo') && <button type="button" className="link" onClick={Login.retrieveRefreshToken}>For NOVI: Login with demo account</button> }
          </div>
        </Card>
      </main>
    );
  }
}

export default Login;
