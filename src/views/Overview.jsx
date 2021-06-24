import React, { Component } from 'react';
import '../assets/css/page-overview.scss';
import ActivityCard from '../components/ActivityCard';
import SelectInput from '../components/inputs/SelectInput';
import DateInput from '../components/inputs/DateInput';
import RecordCards from '../components/RecordCards';

class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  render() {
    const { cards } = this.state;
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
          <ActivityCard />
          {/* <Activities activities={activities} /> */}
        </section>
      </main>
    );
  }
}

export default Overview;
