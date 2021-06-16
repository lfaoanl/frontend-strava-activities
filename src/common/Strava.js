/* eslint-disable class-methods-use-this */
import forEach from 'lodash/forEach';
import includes from 'lodash/includes';
import ApiConnection from './ApiConnection';

class Strava {
  constructor() {
    this.api = new ApiConnection('https://www.strava.com/api/', 'v3');
    this.client = {
      id: process.env.REACT_APP_STRAVA_ID,
      secret: process.env.REACT_APP_STRAVA_SECRET,
    };
    this.scopes = [
      'read',
      'profile:read_all',
      'profile:write',
      'activity:read_all',
    ];
  }

  get athlete() {
    return window.$session.get('athlete');
  }

  set athlete(athlete) {
    window.$session.set('athlete', athlete);
  }

  get authenticateUrl() {
    const authenticateUrl = 'https://www.strava.com/oauth/authorize';
    const params = {
      client_id: this.client.id,
      redirect_uri: window.location.origin,
      response_type: 'code',
      approval_prompt: 'auto',
      scope: this.scopes.join(','),
      state: window.location.hash,
    };
    return `${authenticateUrl}?${ApiConnection.serializeUrl(params)}`;
  }

  // eslint-disable-next-line class-methods-use-this
  get urlParameters() {
    const search = window.location.search.substring(1);
    const urlObject = `{"${decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}"}`;
    return JSON.parse(urlObject);
  }

  async login() {
    const response = await this.api.tokenExchange(this.client, this.urlParameters.code);

    if (!this.validateScopes(this.urlParameters.scope)) {
      return false;
    }
    this.athlete = response;

    return response;
  }

  validateScopes(scopes) {
    const scopesArray = scopes.split(',');
    let valid = true;
    forEach(this.scopes, (scope) => {
      if (!includes(scopesArray, scope)) {
        valid = false;
      }
    });

    return valid;
  }

  getAthlete() {
    return this.api.get('/athlete');
  }
}

export default Strava;
