import includes from 'lodash/includes';
import merge from 'lodash/merge';

class Session {
  constructor() {
    this.cached = {};
    this.defaults = {};
  }

  has(prop) {
    if (this.isCached(prop)) {
      return this.cached[prop].has;
    }
    const item = window.localStorage.getItem(prop);
    if (item === null) {
      this.cached[prop] = { has: false };
      return false;
    }
    this.cached[prop] = {
      has: true,
      item,
    };
    return true;
  }

  get(prop) {
    if (this.isCached(prop)) {
      return this.cached[prop].item;
    }
    const item = JSON.parse(window.localStorage.getItem(prop));
    this.cached[prop] = {
      has: item !== null,
      item,
    };
    return item;
  }

  set(prop, value) {
    window.localStorage.setItem(prop, JSON.stringify(value));
    this.cached[prop] = {
      has: true,
      item: value,
    };
  }

  isCached(prop) {
    return includes(this.cached, prop);
  }

  update(prop, newValues) {
    const oldValues = this.get(prop);
    this.set(prop, merge(oldValues, newValues));
  }
}

export default Session;
