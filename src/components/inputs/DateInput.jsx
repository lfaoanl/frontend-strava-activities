import React, { Component } from 'react';
import Icon from '../Icon';
import '../../assets/css/input.scss';

class DateInput extends Component {
  render() {
    return (
      <div className="input date">
        <label htmlFor="date-input">
          <span className="left">
            <Icon name="calendar" size="small" color={window.primaryColor} />
          </span>
          <span className="label">Start date</span>
          <input type="date" />
        </label>
      </div>
    );
  }
}

export default DateInput;
