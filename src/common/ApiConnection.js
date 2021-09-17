/* eslint-disable camelcase, class-methods-use-this */

import axios from 'axios';
import forEach from 'lodash/forEach';

class ApiConnection {
  constructor(client, endpoint, version) {
    this.endpoint = endpoint;
    this.version = version;
    this.client = client;
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

  async send(type, url, data, refresh = true) {
    this.busy = true;
    if (refresh && this.needsToRefresh()) {
      const token = this.tokenData.refresh_token;
      await this.tokenExchange(token, true);
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

  post(url, data, refresh = true) {
    return this.send('post', url, data, refresh);
  }

  get(url, data) {
    return this.send('get', url, data);
  }

  put(url, data) {
    return this.send('put', url, data);
  }

  static serializeUrl(obj) {
    const str = [];
    forEach(obj, (value, key) => {
      str.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    });
    return str.join('&');
  }

  async tokenExchange(token = '', refresh = false) {
    const data = {
      client_id: this.client.id,
      client_secret: this.client.secret,
    };
    if (refresh) {
      data.grant_type = 'refresh_token';
      data.refresh_token = token;
    } else {
      data.grant_type = 'authorization_code';
      data.code = token;
    }

    const {
      // eslint-disable-next-line camelcase
      token_type, expires_at, refresh_token, access_token, athlete,
    } = await this.post('/oauth/token', data, false);
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
