/* eslint-disable prefer-destructuring */
import forEach from 'lodash/forEach';
import Convert from './Convert';

let activities = [];

class Activity {
  static fetchList(callback) {
    activities = [];
    if (window.$session.has('activities')) {
      const storedActivities = window.$session.get('activities');
      forEach(storedActivities, (stored) => {
        activities.push(new Activity(...stored));
      });
      callback(activities);
    } else {
      window.$strava.getActivities().then((fetched) => {
        // Convert fetched activities to Activity object
        forEach(fetched, (a) => {
          if (a.type !== 'Run') {
            return;
          }
          // eslint-disable-next-line max-len
          const activity = new Activity(a.id, a.name, a.start_date, a.distance, a.average_speed, a.max_speed, a.moving_time);
          activities.push(activity);
        });

        // Send activities back to Component for updating state
        callback(activities);

        // Store activities in $session
        const storableArray = [];
        forEach(activities, (activity) => {
          storableArray.push(activity.storable);
        });
        window.$session.set('activities', storableArray);
      });
    }
  }

  constructor(...props) {
    this.id = props[0];
    this.name = props[1]; // name
    this._date = props[2]; // start_date
    this._distance = props[3]; // distance # in meters
    this._speed = props[4]; // average_speed # in m/s
    this._maxSpeed = props[5]; // max_speed # in m/s
    this._duration = props[6]; // moving_time # in seconds
  }

  get distance() {
    return Convert.distance(this._distance);
  }

  get speed() {
    return Convert.pace(this._speed);
  }

  get maxSpeed() {
    return Convert.pace(this._maxSpeed);
  }

  get duration() {
    return Convert.time(this._duration);
  }

  get date() {
    return Convert.date(this._date);
  }

  get storable() {
    return [
      this.id, this.name, this._date, this._distance, this._speed, this._maxSpeed, this._duration,
    ];
  }
}

export default Activity;
