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
      onClick: PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      half: false,
      onClick: () => false,
    };
  }

  render() {
    const { children, half, onClick } = this.props;
    const cardClass = ['card'];

    if (half) {
      cardClass.push('half');
    }

    return (
      <div className={cardClass.join(' ')} onClick={onClick}>
        { children }
      </div>
    );
  }
}

export default Card;
