class Settings {
  static get() {
    return window.$session.get('settings');
  }

  static get metric() {
    const { units } = Settings.get();
    return typeof units === 'undefined' || units === 'metric';
  }

  static get pace() {
    const { speed } = Settings.get();
    return typeof speed === 'undefined' || speed === 'pace';
  }
}

export default Settings;
