/**
 * Included before every test to initialise global values
 */
import React from 'react';
import Strava from '../common/Strava';
import Session from '../common/Session';

window.primaryColor = '#fc4c02';
window.$strava = new Strava();
window.$session = new Session();
window.$app = React.createRef();
