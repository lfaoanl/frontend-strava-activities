import React, { Component } from 'react';
import '../assets/css/compare-card.scss';
import PropTypes from 'prop-types';
import Statistic from './Statistic';
import Icon from './Icon';
import Activity from '../common/Activity';
import Loading from './Loading';
import Context from '../common/ColorContext';

class CompareCard extends Component {
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);

    CompareCard.contextType = Context;

    this.state = {
      activity: props.activity,
      loading: true,
    };
  }

  static get propTypes() {
    return {
      activity: PropTypes.instanceOf(Activity).isRequired,
      remove: PropTypes.func.isRequired,
    };
  }

  componentDidMount() {
    const { activity } = this.props;
    window.$strava.getActivity(activity.id).then((a) => {
      this.setState({ activity: a, loading: false });
    });
  }

  remove() {
    const { remove } = this.props;
    const { activity } = this.state;
    remove(activity.id);
  }

  render() {
    const { activity, loading } = this.state;

    if (loading) {
      return (
        <main>
          <Loading message="..." />
        </main>
      );
    }

    return (
      <div className="compare-card">
        <div className="compare-card-header">
          <time>{activity.date}</time>
          <h2>{activity.name}</h2>
        </div>

        <div className="stats-list">
          <div>
            <Statistic label="speed" value={activity.getSpeed(false)} />
            <Statistic value={activity.getSpeed(true)} />
          </div>
          <Statistic label="distance" value={activity.getDistance()} />
          <Statistic label="duration" value={activity.duration} />

          { !!activity.props.calories && <Statistic label="calories" value={activity.props.calories} /> }

          <div className="icon-container" onClick={this.remove}>
            <Icon name="minus-circle" size="large" color={this.context} />
          </div>
        </div>
      </div>
    );
  }
}

export default CompareCard;
