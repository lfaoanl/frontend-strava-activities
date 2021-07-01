import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import StatisticIcon from './StatisticIcon';
import ActivityTitle from './ActivityTitle';
import Activity from '../common/Activity';
import Convert from '../common/Convert';

class ActivityCard extends Component {
  static get propTypes() {
    return {
      activity: PropTypes.instanceOf(Activity).isRequired,
    };
  }

  render() {
    const { activity } = this.props;
    return (
      <Card>
        <a href={`#/activity/${activity.id}`}>
          <ActivityTitle activity={activity} />
          <div className="activity-icon-list">
            <StatisticIcon centered icon="track" title={activity.distance} subtitle={Convert.distanceText()} />
            <StatisticIcon centered icon="clock" title={activity.duration} subtitle="time" />
            <StatisticIcon centered icon="speedometer" title={activity.speed} subtitle={Convert.speedText()} />
            <StatisticIcon centered icon="rabbit" title={activity.maxSpeed} subtitle={Convert.speedText()} />
          </div>
        </a>
      </Card>
    );
  }
}

export default ActivityCard;
