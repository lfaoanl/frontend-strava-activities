import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../assets/css/card.scss';

class Card extends Component {
  static get propTypes() {
    return {
      half: PropTypes.bool,
      children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
      ]).isRequired,
    };
  }

  static get defaultProps() {
    return {
      half: false,
    };
  }

  render() {
    const { children, half } = this.props;
    const cardClass = ['card'];

    if (half) {
      cardClass.push('half');
    }

    return (
      <div className={cardClass.join(' ')}>
        { children }
      </div>
    );
  }
}

export default Card;
