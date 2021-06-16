/* eslint-disable camelcase, class-methods-use-this */

import axios from 'axios';
import forEach from 'lodash/forEach';

class ApiConnection {
  constructor(endpoint, version) {
    this.endpoint = endpoint;
    this.version = version;
    this.client = {};
    this.busy = false;
  }

  get auth() {
    return window.$session.has('token');
  }

  get tokenData() {
    if (!this.auth) {
      return {};
    }
    return window.$session.get('token');
  }

  set tokenData(data) {
    window.$session.set('token', data);
  }

  get url() {
    return this.endpoint + this.version;
  }

  async send(type, url, data) {
    this.busy = true;
    if (this.needsToRefresh()) {
      console.log('needs to refresh');
      await this.tokenExchange(this.client, this.auth, true);
    }
    const config = {
      method: type,
      url: this.url + url,
    };

    if (this.auth) {
      const { token_type, access_token } = this.tokenData;
      config.headers = {
        Authorization: `${token_type} ${access_token}`,
      };
    }

    if (type.toLowerCase() === 'get') {
      config.url = `${config.url}?${ApiConnection.serializeUrl(data)}`;
    } else {
      config.data = data;
    }

    const response = await axios(config);

    this.busy = false;
    return Promise.resolve(response.data);
  }

  post(url, data) {
    return this.send('post', url, data);
  }

  get(url, data) {
    return this.send('get', url, data);
  }

  static serializeUrl(obj) {
    const str = [];
    forEach(obj, (value, key) => {
      str.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    });
    return str.join('&');
  }

  async tokenExchange(client, token = '', refresh = false) {
    this.client = {
      client_id: client.id,
      client_secret: client.secret,
    };
    const data = this.client;
    if (refresh) {
      data.grant_type = 'refresh_token';
      data.token = this.tokenData.refresh_token;
    } else {
      data.grant_type = 'authorization_code';
      data.code = token;
    }

    const {
      // eslint-disable-next-line camelcase
      token_type, expires_at, refresh_token, access_token, athlete,
    } = await this.post('/oauth/token', data);
    this.tokenData = {
      token_type,
      expires_at,
      refresh_token,
      access_token,
    };
    return athlete;
  }

  needsToRefresh() {
    const date = new Date();
    const current_time = Math.floor(date.getTime() / 1000);
    return this.auth && this.tokenData.expires_at < current_time;
  }
}
export default ApiConnection;
