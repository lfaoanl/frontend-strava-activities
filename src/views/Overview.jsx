/* eslint-disable */
import React, { Component } from 'react';
import '../assets/css/page-overview.scss';
import maxBy from 'lodash/maxBy';
import forEach from 'lodash/forEach';
import SelectInput from '../components/inputs/SelectInput';
import DateInput from '../components/inputs/DateInput';
import RecordCards from '../components/RecordCards';
import ActivityList from '../components/ActivityList';
import Activity from '../common/Activity';
import Convert from '../common/Convert';

class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activities: [],
      records: [
        { // Distance
          id: null,
          icon: 'track',
          value: '23',
          unit: Convert.distanceText(),
        },
        { // Duration
          id: null,
          icon: 'clock',
          value: '00:32:43',
          unit: 'time',
        },
        { // Fastest average
          id: null,
          icon: 'speedometer',
          value: '279',
          unit: Convert.speedText(),
        },
        { // Fastest
          id: null,
          icon: 'rabbit',
          value: '0',
          unit: Convert.speedText(),
        },
      ],
    };
  }

  componentDidMount() {
    Activity.fetchList((activities) => {
      const { records } = this.state;

      const maxValues = ['distance', 'duration', 'speed', 'maxSpeed'];
      forEach(maxValues, (value, index) => {
        const max = maxBy(activities, (a) => a[`_${value}`]);
        records[index].id = max.id;
        records[index].value = max[value];
      });

      this.setState({ activities, records });
    });
  }

  render() {
    const { records, activities } = this.state;
    return (
      <main>
        <section>
          <h4>personal records</h4>
          <RecordCards cards={records} />
        </section>

        <section className="small">
          <h4>activities</h4>
          <SelectInput />
        </section>

        <section className="date-inputs">
          <DateInput />
          <DateInput />
        </section>

        <section className="activity-cards">
          <ActivityList activities={activities} />

        </section>
      </main>
    );
  }
}

export default Overview;
