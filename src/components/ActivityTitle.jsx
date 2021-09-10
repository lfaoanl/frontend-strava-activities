import React, { Component } from 'react';
import PropTypes from 'prop-types';
import includes from 'lodash/includes';
import map from 'lodash/map';
import Icon from './Icon';
import '../assets/css/activity-title.scss';
import Activity from '../common/Activity';

class ActivityTitle extends Component {
  static get propTypes() {
    return {
      activity: PropTypes.instanceOf(Activity).isRequired,
    };
  }

  static compareIds() {
    return map(window.$session.get('compare'), (a) => a[0]);
  }

  constructor(props) {
    super(props);

    this.addToCompare = this.addToCompare.bind(this);
  }

  addToCompare(event) {
    // Cancel opening of activity card
    event.stopPropagation();

    const { activity } = this.props;
    const compare = window.$session.get('compare');
    let stored = false;

    if (compare === null) {
      window.$session.set('compare', [activity.storable], true);
      stored = true;
    } else if (compare.length < 3) {
      window.$session.update('compare', [activity.storable], true);
      stored = true;
    }
    // window.location.href = '/#/compare';

    this.forceUpdate();
    return stored;
  }

  render() {
    const { activity } = this.props;

    const showAddToCompare = !includes(ActivityTitle.compareIds(), activity.id);
    return (
      <div className="activity-title">
        { showAddToCompare && <Icon name="plus" color={window.primaryColor} size="small" right onClick={this.addToCompare} /> }
        { !showAddToCompare && <Icon name="scale-balance" color={window.primaryColor} size="small" right /> }
        <h2>{activity.name}</h2>
        <time>{activity.date}</time>
        <br />
        { !!activity.props.description && activity.props.description }
      </div>
    );
  }
}

export default ActivityTitle;
