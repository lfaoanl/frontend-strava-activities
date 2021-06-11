import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/button-radio.scss';
import Icon from '../Icon';

class ButtonInput extends Component {
  static get propTypes() {
    return {
      label: PropTypes.string.isRequired,
      primary: PropTypes.bool,
      onClick: PropTypes.func,
      icon: PropTypes.arrayOf(PropTypes.string, PropTypes.bool),
    };
  }

  static get defaultProps() {
    return {
      primary: false,
      icon: false,
      onClick: () => {},
    };
  }

  render() {
    const {
      label, primary, onClick, icon,
    } = this.props;
    return (
      <button className={`button ${primary && 'primary'}`} type="button" onClick={onClick}>
        <span className="label">{label}</span>
        {icon && <Icon name={icon} right />}
      </button>
    );
  }
}

export default ButtonInput;
