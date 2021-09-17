import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../assets/css/page-activity.scss';
import ActivityTitle from '../components/ActivityTitle';
import MapsCard from '../components/MapsCard';
import Statistic from '../components/Statistic';
import GraphCard from '../components/GraphCard';
import Loading from '../components/Loading';

class Activity extends Component {
  static get propTypes() {
    return {
      id: PropTypes.string.isRequired,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      activity: null,
    };
  }

  componentDidMount() {
    const { id } = this.props;
    if (id === 'none') {
      return;
    }
    window.$strava.getActivity(id).then((activity) => {
      this.setState({ activity, loading: false });
    });
  }

  render() {
    const { activity, loading } = this.state;

    if (loading) {
      return (
        <main>
          <Loading message="Getting activity data" />
        </main>
      );
    }

    return (
      <main>
        <section>
          <ActivityTitle activity={activity} button />
        </section>

        <section>
          <MapsCard polyline={activity.props.map.polyline} />
        </section>

        <section className="activity-stats">
          <Statistic label="speed" value={activity.getSpeed(false)} />
          <Statistic label="pace" value={activity.getSpeed(true)} />

          <Statistic label="max speed" value={activity.getMaxSpeed(false)} />
          <Statistic label="pace" value={activity.getMaxSpeed(true)} />

          <Statistic label="distance" value={activity.getDistance()} />
          <Statistic label="duration" value={activity.duration} />

          <Statistic label="calories" value={activity.props.calories} />
        </section>

        <section>
          <GraphCard />
        </section>
      </main>
    );
  }
}

export default Activity;
