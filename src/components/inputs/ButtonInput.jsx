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
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
      link: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    };
  }

  static get defaultProps() {
    return {
      primary: false,
      icon: false,
      onClick: () => {},
      link: false,
    };
  }

  render() {
    const {
      label, primary, onClick, icon, link,
    } = this.props;
    const content = (
      <>
        <span className="label">{label}</span>
        {icon && <Icon name={icon} right />}
      </>
    );

    if (link) {
      return (
        <a href={link} className={`button ${primary && 'primary'}`}>{ content }</a>
      );
    }
    return (
      <button className={`button ${primary && 'primary'}`} type="button" onClick={onClick}>
        {content}
      </button>
    );
  }
}

export default ButtonInput;
