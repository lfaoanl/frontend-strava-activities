import React, { Component } from 'react';
import PropTypes from 'prop-types';
import forEach from 'lodash/forEach';
import Activity from '../common/Activity';
import ActivityCard from './ActivityCard';

class ActivityList extends Component {
  static get propTypes() {
    return {
      activities: PropTypes.arrayOf(PropTypes.instanceOf(Activity)).isRequired,
    };
  }

  render() {
    const { activities } = this.props;

    const cards = [];

    forEach(activities, (activity) => {
      cards.push(<ActivityCard key={activity.id} activity={activity} />);
    });

    return (
      <>
        { cards }
      </>
    );
  }
}

export default ActivityList;
