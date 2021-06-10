import React, { Component } from 'react';
import '../assets/css/page-overview.scss';
import StatisticIcon from '../components/StatisticIcon';
import ActivityCard from '../components/ActivityCard';
import SelectInput from '../components/inputs/SelectInput';
import DateInput from '../components/inputs/DateInput';

class Overview extends Component {
  render() {
    return (
      <main>
        <section>
          <h4>personal records</h4>
          <div className="record-cards">
            <StatisticIcon card />
            <StatisticIcon card />
            <StatisticIcon card />
            <StatisticIcon card />
          </div>
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
        </section>
      </main>
    );
  }
}

export default Overview;
