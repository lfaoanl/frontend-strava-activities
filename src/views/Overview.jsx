import React, { Component } from 'react';
import '../assets/css/page-overview.scss';
import SelectInput from '../components/inputs/SelectInput';
import DateInput from '../components/inputs/DateInput';
import RecordCards from '../components/RecordCards';
import ActivityList from '../components/ActivityList';
import Activity from '../common/Activity';

class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activities: [],
      cards: [
        {
          icon: 'rabbit',
          value: '17',
          unit: 'km/h',
        },
        {
          icon: 'track',
          value: '23',
          unit: 'km',
        },
        {
          icon: 'clock',
          value: '00:32:43',
          unit: 'duration',
        },
        {
          icon: 'fire',
          value: '279',
          unit: 'calories',
        },
      ],
    };
  }

  componentDidMount() {
    Activity.fetchList((activities) => {
      this.setState({ activities });
      console.log(activities);
    });
  }

  render() {
    const { cards, activities } = this.state;
    return (
      <main>
        <section>
          <h4>personal records</h4>
          <RecordCards cards={cards} />
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
          {/* <ActivityCard /> */}
          <ActivityList activities={activities} />
        </section>
      </main>
    );
  }
}

export default Overview;
