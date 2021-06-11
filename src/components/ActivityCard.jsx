import React, { Component } from 'react';
import Card from './Card';
import StatisticIcon from './StatisticIcon';
import ActivityTitle from './ActivityTitle';

class ActivityCard extends Component {
  render() {
    return (
      <Card>
        <ActivityTitle />
        <div className="activity-icon-list">
          <StatisticIcon centered />
          <StatisticIcon centered />
          <StatisticIcon centered />
          <StatisticIcon centered />
        </div>
      </Card>
    );
  }
}

export default ActivityCard;
