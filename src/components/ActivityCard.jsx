import React, { Component } from 'react';
import Card from './Card';
import Icon from './Icon';
import StatisticIcon from './StatisticIcon';

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
