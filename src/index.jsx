import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/reset.css';
import './assets/css/icons.css';
import './assets/css/index.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Session from './common/Session';
import Strava from './common/Strava';
import reportWebVitals from './reportWebVitals';
import ColorContext from './common/ColorContext';

window.$app = React.createRef();
window.$session = new Session();
window.$strava = new Strava();

const primaryColor = '#fc4c02';

ReactDOM.render(
  <React.StrictMode>
    <ColorContext.Provider value={primaryColor}>
      <BrowserRouter>
        <App ref={window.$app} />
      </BrowserRouter>
    </ColorContext.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
