import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import '../../assets/css/input.scss';

class DateInput extends Component {
  static get propTypes() {
    return {
      onChange: PropTypes.func.isRequired,
      min: PropTypes.instanceOf(Date),
      max: PropTypes.instanceOf(Date),
    };
  }

  static get defaultProps() {
    return {
      min: null, max: null,
    };
  }

  static format(date) {
    if (date === null) {
      return null;
    }

    const dateArray = [
      date.getFullYear().toString().padStart(2, '0'),
      (date.getMonth() + 1).toString().padStart(2, '0'),
      date.getDate().toString().padStart(2, '0'),
    ];
    return dateArray.join('-');
  }

  constructor(props) {
    super(props);

    this.onChanged = this.onChanged.bind(this);
  }

  onChanged(event) {
    const { onChange } = this.props;
    const date = new Date(event.target.value);
    if (this.allowed(date)) {
      onChange(date);
    }
  }

  allowed(date) {
    const { min, max } = this.props;
    return (min === null || date >= min)
      && (max === null || date <= max);
  }

  render() {
    const { min, max } = this.props;
    return (
      <div className="input date">
        <label htmlFor="date-input">
          <span className="left">
            <Icon name="calendar" size="small" color={window.primaryColor} />
          </span>
          <span className="label">Start date</span>
          <input
            type="date"
            min={DateInput.format(min)}
            max={DateInput.format(max)}
            onChange={this.onChanged}
          />
        </label>
      </div>
    );
  }
}

export default DateInput;
