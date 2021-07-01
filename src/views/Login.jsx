import React, { Component } from 'react';
import includes from 'lodash/includes';
import Card from '../components/Card';
import ButtonInput from '../components/inputs/ButtonInput';
import '../assets/css/page-login.scss';

class Login extends Component {
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
          </div>
        </Card>
      </main>
    );
  }
}

export default Login;
