import Settings from './Settings';

function toMiles(meters) {
  return meters / 1609;
}

function round(number) {
  return Math.round(number * 10) / 10;
}

class Convert {
  static distance(meters) {
    return round(Settings.metric ? meters / 1000 : toMiles(meters));
  }

  static pace(metersPerSeconds) {
    const factor = Settings.metric ? 3.6 : 2.23693629;
    const speed = metersPerSeconds * factor;

    if (Settings.pace) {
      return Convert.time((60 / speed), true);
    }

    return round(speed);
  }

  static time(seconds, minutes = false) {
    let realSeconds = seconds;

    if (minutes) {
      realSeconds *= 60;
    }

    const date = new Date(realSeconds * 1000);
    const times = [
      date.getSeconds().toString().padStart(2, '0'),
      date.getMinutes().toString(),
    ];

    if (!minutes) {
      const hours = date.getHours() + (date.getTimezoneOffset() / 60);
      times.push(hours.toString());

      times[1] = times[1].padStart(2, '0');
    }

    return times.reverse().join(':');
  }

  static date(utcString) {
    const date = new Date(utcString);

    let dateArray = [date.getDate(), date.getMonth(), date.getFullYear()];
    if (!Settings.metric) {
      // Sets to MM-DD-YYYY
      dateArray = [dateArray[1], dateArray[0], dateArray[2]];
    }
    return dateArray.join('/');
  }

  static speedText() {
    if (Settings.pace) {
      return `min/${Settings.metric ? 'km' : 'mile'}`;
    }
    return Settings.metric ? 'km/h' : 'mph';
  }

  static distanceText() {
    if (Settings.metric) {
      return 'km';
    }
    return 'miles';
  }
}

export default Convert;
