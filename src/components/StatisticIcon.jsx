import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Icon from './Icon';

class StatisticIcon extends Component {
  static get propTypes() {
    return {
      card: PropTypes.bool,
      centered: PropTypes.bool,
    };
  }

  static get defaultProps() {
    return {
      card: false,
      centered: false,
    };
  }

  render() {
    const { card, centered } = this.props;
    const className = `statistic ${(card || centered) && 'centered'}`;
    const size = card ? 'large' : 'normal';
    const template = (
      <div className={className}>
        <Icon name="rabbit" size={size} />
        <h3 className="m-0">12</h3>
        <h4 className="m-0">km/h</h4>
      </div>
    );

    if (card) {
      return (<Card>{template}</Card>);
    }

    return template;
  }
}

export default StatisticIcon;
