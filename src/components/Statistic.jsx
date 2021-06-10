import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Statistic extends Component {
  static get propTypes() {
    return {
      centered: PropTypes.bool,
      label: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
    };
  }

  static get defaultProps() {
    return {
      centered: false,
      label: '',
    };
  }

  render() {
    const { label, value, centered } = this.props;
    const className = `statistic ${centered && 'centered'}`;

    return (
      <div className={className}>
        <h4 className="m-0">{label}</h4>
        <h3 className="m-0">{value}</h3>
      </div>
    );
  }
}

export default Statistic;
