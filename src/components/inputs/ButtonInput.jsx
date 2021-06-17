import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/button-radio.scss';
import Icon from '../Icon';

class ButtonInput extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  static get propTypes() {
    return {
      label: PropTypes.string.isRequired,
      primary: PropTypes.bool,
      onClick: PropTypes.func,
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
      link: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
      loading: PropTypes.bool,
    };
  }

  static get defaultProps() {
    return {
      primary: false,
      icon: false,
      onClick: () => {},
      link: false,
      loading: false,
    };
  }

  handleClick() {
    const { loading, onClick } = this.props;
    if (!loading) {
      onClick();
    }
  }

  render() {
    const {
      label, primary, icon, link, loading,
    } = this.props;
    let content;

    if (loading) {
      content = (
        <span className="label">
          <Icon name="loading" />
        </span>
      );
    } else {
      content = (
        <>
          <span className="label">{label}</span>
          {icon && <Icon name={icon} right />}
        </>
      );
    }

    if (link) {
      return (
        <a href={link} className={`button ${primary && 'primary'}`}>{ content }</a>
      );
    }
    return (
      <button className={`button ${primary && 'primary'}`} type="button" onClick={() => this.handleClick()}>
        {content}
      </button>
    );
  }
}

export default ButtonInput;
