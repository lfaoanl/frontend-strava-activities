import React, { Component } from 'react';
import '../assets/css/page-overview.scss';
import maxBy from 'lodash/maxBy';
import forEach from 'lodash/forEach';
import sortBy from 'lodash/sortBy';
import reverse from 'lodash/reverse';
import filter from 'lodash/filter';
import SelectInput from '../components/inputs/SelectInput';
import DateInput from '../components/inputs/DateInput';
import RecordCards from '../components/RecordCards';
import ActivityList from '../components/ActivityList';
import Activity from '../common/Activity';
import Convert from '../common/Convert';
import Icon from '../components/Icon';

class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activities: [],
      filteredActivities: [],
      records: [
        { // Distance
          id: null,
          icon: 'track',
          value: '0',
          unit: Convert.distanceText(),
        },
        { // Duration
          id: null,
          icon: 'clock',
          value: '00:00:00',
          unit: 'time',
        },
        { // Fastest average
          id: null,
          icon: 'speedometer',
          value: '0',
          unit: Convert.speedText(),
        },
        { // Fastest
          id: null,
          icon: 'rabbit',
          value: '0',
          unit: Convert.speedText(),
        },
      ],
      date: { start: null, end: null },
    };

    this.selectChanged = this.selectChanged.bind(this);
    this.changeStartDate = this.changeStartDate.bind(this);
    this.changeEndDate = this.changeEndDate.bind(this);
    this.resetDates = this.resetDates.bind(this);
  }

  componentDidMount() {
    Activity.fetchList((activities) => {
      const { records } = this.state;

      // Calculate records
      const maxValues = ['distance', 'duration', 'speed', 'maxSpeed'];
      forEach(maxValues, (value, index) => {
        const max = maxBy(activities, (a) => a[`_${value}`]);
        records[index].id = max.id;
        records[index].value = max[value];
      });

      this.setState({ activities, records });
    });
  }

  setState(object, meta) {
    super.setState(object, (e) => {
      if (meta !== false) {
        this.updateActivitiesByDate();
      }
      if (meta instanceof Function) {
        meta(e);
      }
    });
  }

  selectChanged(value) {
    const { activities } = this.state;

    this.setState({
      activities: reverse(sortBy(activities, [value])),
    });
  }

  changeStartDate(value) {
    const { date } = this.state;
    date.start = value;
    this.setState({ date });
  }

  changeEndDate(value) {
    const { date } = this.state;

    // Add one day to include the selected date as end date
    value.setDate(value.getDate() + 1);

    date.end = value;
    this.setState({ date });
  }

  resetDates() {
    this.setState({ date: { start: null, end: null } });
  }

  updateActivitiesByDate() {
    const { activities, date } = this.state;

    const filteredActivities = filter(activities, (a) => {
      // eslint-disable-next-line no-underscore-dangle
      const activityDate = new Date(a._date);

      return (date.start === null || activityDate >= date.start)
        && (date.end === null || activityDate <= date.end);
    });

    this.setState({ filteredActivities }, false);
  }

  render() {
    const { records, filteredActivities, date } = this.state;
    return (
      <main>
        <section>
          <h4>personal records</h4>
          <RecordCards cards={records} />
        </section>

        <section className="small">
          <h4>activities</h4>
          <SelectInput onChange={this.selectChanged} />
        </section>

        <section className="date-inputs">
          <DateInput max={date.end} onChange={this.changeStartDate} />
          <DateInput min={date.start} onChange={this.changeEndDate} />
          <button className="button" type="button" onClick={this.resetDates}>
            <Icon name="sync" />
          </button>
        </section>

        <section className="activity-cards">
          <ActivityList activities={filteredActivities} />

        </section>
      </main>
    );
  }
}

export default Overview;
