import React, { Component } from 'react';
import Card from '../components/Card';
import ButtonInput from '../components/inputs/ButtonInput';
import '../assets/css/page-login.scss';

class Login extends Component {
  render() {
    return (
      <main className="login">
        <Card>
          <h1>Login</h1>
          <div className="button-container">
            <ButtonInput label="Login with strava" primary icon="arrow-right" />
          </div>
        </Card>
      </main>
    );
  }
}

export default Login;
