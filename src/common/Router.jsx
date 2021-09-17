import React from 'react';
import find from 'lodash/find';
import filter from 'lodash/filter';
import forEach from 'lodash/forEach';
import Login from '../views/Login';
import Overview from '../views/Overview';
import Profile from '../views/Profile';
import Activity from '../views/Activity';
import CompareList from '../views/CompareList';

let currentRoute = '';
let urlData = {};
const routes = [
  {
    name: 'overview',
    url: '#/',
    view: <Overview />,
    title: 'Overview',
    home: true,
  },
  {
    name: 'login',
    url: '#/login',
    view: <Login />,
    title: 'Login',
    guest: true,
  },
  {
    name: 'profile',
    url: '#/profile',
    view: <Profile />,
    title: 'My Profile',
  },
  {
    name: 'activity',
    url: '#/activity/{id}',
    view: <Activity id="none" />,
    title: 'Activity',
  },
  {
    name: 'compare',
    url: '#/compare',
    view: <CompareList />,
    title: 'Compare List',
  },
];

class Router {
  static handleUrlChange(callback) {
    const route = Router.parseRoute();
    callback(route);
  }

  static getName() {
    return currentRoute;
  }

  static getTitle(name) {
    const route = Router.getRoute(name);
    return route.title;
  }

  static getUrl(name, params = {}) {
    const { url } = Router.getRoute(name) || this.defaultRoute;
    let parsed = url;
    forEach(params, (value, key) => {
      parsed = parsed.replace(`{${key}}`, value);
    });
    return parsed;
  }

  static getView(name) {
    const { view } = Router.getRoute(name);
    return React.cloneElement(view, urlData);
  }

  static getRoute(name) {
    return find(routes, { name });
  }

  static parseRoute() {
    if (!window.$session.has('athlete')) {
      return this.setRoute(this.guestRoute);
    }
    const location = window.location.hash.split('/');
    const dataValues = location.slice(2);
    const found = filter(routes, (route) => {
      const segments = route.url.split('/');
      if (segments[1] !== location[1]) {
        return false;
      }

      return segments.slice(2).length === dataValues.length;
    });
    if (found[0]) {
      return this.setRoute(found[0], dataValues);
    }
    return this.setRoute(Router.defaultRoute);
  }

  static get guestRoute() {
    return find(routes, { guest: true });
  }

  static get defaultRoute() {
    return find(routes, { home: true });
  }

  static setRoute(route, dataValues = {}) {
    currentRoute = route.name;
    this.parseRouteData(route, dataValues);
    return route;
  }

  static parseRouteData(route, values) {
    const dataKeys = route.url.split('/').slice(2);
    urlData = {};
    forEach(values, (value, i) => {
      const dataKey = dataKeys[i].substr(1, dataKeys[i].length - 2);
      urlData[dataKey] = value;
    });
  }

  static navigate(name, params = {}) {
    const url = Router.getUrl(name, params);
    window.location.hash = url;
  }
}

export default Router;
