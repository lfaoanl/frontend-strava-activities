import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/reset.css';
import './assets/css/icons.css';
import './assets/css/index.scss';
import App from './App';
import Session from './common/Session';
import Strava from './common/Strava';
import reportWebVitals from './reportWebVitals';

window.primaryColor = '#fc4c02';
window.$strava = new Strava();
window.$session = new Session();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
