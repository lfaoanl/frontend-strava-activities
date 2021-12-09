import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import Card from './Card';
import StatisticIcon from './StatisticIcon';
import ActivityTitle from './ActivityTitle';
import Activity from '../common/Activity';
import Convert from '../common/Convert';

class ActivityCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openCard: false,
    };
    this.openCard = this.openCard.bind(this);
  }

  static get propTypes() {
    return {
      activity: PropTypes.instanceOf(Activity).isRequired,
    };
  }

  /**
   * Can't use a[href] because we need to stop propagination
   */
  openCard() {
    const { activity } = this.props;
    this.setState({ openCard: activity.id });
  }

  render() {
    const { activity } = this.props;
    const { openCard } = this.state;
    return (
      <Card>
        <div onClick={this.openCard}>
          <ActivityTitle activity={activity} />
          <div className="activity-icon-list">
            <StatisticIcon centered icon="track" title={activity.distance} subtitle={Convert.distanceText()} />
            <StatisticIcon centered icon="clock" title={activity.duration} subtitle="time" />
            <StatisticIcon centered icon="speedometer" title={activity.speed} subtitle={Convert.speedText()} />
            <StatisticIcon centered icon="rabbit" title={activity.maxSpeed} subtitle={Convert.speedText()} />
          </div>
        </div>
        {openCard && <Navigate to={`/activity/${openCard}`} /> }
      </Card>
    );
  }
}

export default ActivityCard;
