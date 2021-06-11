import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/button-radio.scss';

class ButtonInput extends Component {
  static get propTypes() {
    return {
      primary: PropTypes.bool,
    };
  }

  static get defaultProps() {
    return {
      primary: false,
    };
  }

  render() {
    const { primary } = this.props;
    return (
      <button className={`button ${primary && 'primary'}`} type="button" onClick={this.handleClick}>
        SAVE
      </button>
    );
  }
}

export default ButtonInput;
