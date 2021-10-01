import includes from 'lodash/includes';
import merge from 'lodash/merge';
import concat from 'lodash/concat';

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

  get(prop, defaultForProp = null) {
    if (this.isCached(prop)) {
      return this.cached[prop].item;
    }
    const item = JSON.parse(window.localStorage.getItem(prop));

    this.cached[prop] = {
      has: item !== null,
      item,
    };
    return item || defaultForProp;
  }

  set(prop, value, updatable = false) {
    window.localStorage.setItem(prop, JSON.stringify(value));
    this.cached[prop] = {
      has: true,
      item: value,
    };
    if (updatable) {
      window.$app.current[prop].current.forceUpdate();
    }
    return value;
  }

  isCached(prop) {
    return includes(this.cached, prop);
  }

  update(prop, newValues, updatable = false) {
    const oldValues = this.get(prop);
    let merged;
    if (oldValues instanceof Array) {
      merged = concat(oldValues, newValues);
    } else {
      merged = merge(oldValues, newValues);
    }
    return this.set(prop, merged, updatable);
  }
}

export default Session;
