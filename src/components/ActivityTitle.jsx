import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import '../assets/css/activity-title.scss';
import Activity from '../common/Activity';

class ActivityTitle extends Component {
  static get propTypes() {
    return {
      activity: PropTypes.instanceOf(Activity).isRequired,
    };
  }

  render() {
    const { activity } = this.props;
    return (
      <div className="activity-title">
        <Icon name="plus" color={window.primaryColor} size="small" right />
        <h2>{activity.name}</h2>
        <time>{activity.date}</time>
      </div>
    );
  }
}

export default ActivityTitle;
