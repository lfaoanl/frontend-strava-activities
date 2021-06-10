import React, { Component } from 'react';
import Card from './Card';
import Icon from './Icon';
import StatisticIcon from './StatisticIcon';

class ActivityCard extends Component {
  render() {
    return (
      <Card>
        <Icon name="plus" color={window.primaryColor} size="small" className="add-to-compare-list" />
        <h2>Sunday Afternoon Run</h2>
        <time>21/07/2021</time>
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
