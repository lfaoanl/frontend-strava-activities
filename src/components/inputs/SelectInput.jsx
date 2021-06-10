import React, { Component } from 'react';
import Icon from '../Icon';
import '../../assets/css/input.scss';

class SelectInput extends Component {
  render() {
    return (
      <div className="input">
        <label htmlFor="select-input">
          <span className="label">Order by</span>
          <select id="select-input" defaultValue="date">
            <option value="date">Date</option>
            <option value="speed">Speed</option>
            <option value="distance">Distance</option>
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
          </select>
          <span className="right">
            <Icon name="chevron-down" color={window.primaryColor} />
          </span>
        </label>
      </div>
    );
  }
}

export default SelectInput;
