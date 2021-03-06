import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Icon from './Icon';

class StatisticIcon extends Component {
  static get propTypes() {
    return {
      card: PropTypes.bool,
      centered: PropTypes.bool,
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      icon: PropTypes.string,
      id: PropTypes.number,
    };
  }

  static get defaultProps() {
    return {
      card: false,
      centered: false,
      title: '',
      subtitle: '',
      icon: 'rabbit',
      id: 0,
    };
  }

  constructor(props) {
    super(props);
    this.open = this.open.bind(this);
  }

  open() {
    const { id } = this.props;
    window.location.href = `#/activity/${id}`;
  }

  render() {
    const {
      card, centered, title, subtitle, icon,
    } = this.props;
    const className = `statistic ${(card || centered) && 'centered'}`;
    const size = card ? 'large' : 'normal';
    const template = (
      <div className={className}>
        <Icon name={icon} size={size} />
        <h3 className="m-0">{title}</h3>
        <h4 className="m-0">{subtitle}</h4>
      </div>
    );

    if (card) {
      return (<Card onClick={this.open}>{template}</Card>);
    }

    return template;
  }
}

export default StatisticIcon;
