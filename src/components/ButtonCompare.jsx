import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import '../assets/css/button-compare.scss';

class ButtonCompare extends Component {
  static get propTypes() {
    return {
      onClick: PropTypes.func.isRequired,
    };
  }

  render() {
    const { onClick } = this.props;
    return (
      <div className="button-compare" onClick={onClick}>
        <Icon name="scale-balance" size="large" color="white" />
      </div>
    );
  }
}

export default ButtonCompare;
