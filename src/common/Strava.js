/* eslint-disable class-methods-use-this */
import forEach from 'lodash/forEach';
import includes from 'lodash/includes';
import ApiConnection from './ApiConnection';
import Activity from './Activity';

class Strava {
  constructor() {
    this.client = {
      id: process.env.REACT_APP_STRAVA_ID,
      secret: process.env.REACT_APP_STRAVA_SECRET,
    };
    this.api = new ApiConnection(this.client, 'https://www.strava.com/api/', 'v3');
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

  async login(viaRefresh = false) {
    let response;
    if (viaRefresh) {
      response = await this.api.get('/athlete');
    } else {
      response = await this.api.tokenExchange(this.urlParameters.code);
    }

    if (!viaRefresh && !this.validateScopes(this.urlParameters.scope)) {
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

  async getAthlete() {
    const athlete = await this.api.get('/athlete');
    const stats = await this.api.get(`/athletes/${athlete.id}/stats`);

    return {
      athlete,
      stats,
    };
  }

  updateAthlete(settings) {
    return this.api.put('/athlete', settings);
  }

  getActivities() {
    // TODO set perpage too 250
    return this.api.get('/athlete/activities');
  }

  getActivity(id) {
    return new Promise((resolve) => {
      this.api.get(`/activities/${id}`).then((fetched) => {
        resolve(Activity.fromFetched(fetched));
      });
    });
  }
}

export default Strava;
