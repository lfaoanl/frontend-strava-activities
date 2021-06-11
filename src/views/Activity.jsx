import React, { Component } from 'react';
import '../assets/css/page-activity.scss';
import ActivityTitle from '../components/ActivityTitle';
import MapsCard from '../components/MapsCard';
import Statistic from '../components/Statistic';
import GraphCard from '../components/GraphCard';

class Activity extends Component {
  render() {
    return (
      <main>
        <section>
          <ActivityTitle />
        </section>

        <section>
          <MapsCard />
        </section>

        <section className="activity-stats">
          <Statistic label="speed" value="12 km/h" />
          <Statistic value="5 min/km" />

          <Statistic label="distance" value="4 km" />
          <Statistic label="duration" value="00:20:43" />

          <Statistic label="calories" value="72 kcal" />
          <Statistic label="heartrate" value="87 bpm" />
        </section>

        <section>
          <GraphCard />
        </section>
      </main>
    );
  }
}

export default Activity;
