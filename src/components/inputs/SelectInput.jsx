import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import '../../assets/css/input.scss';

class SelectInput extends Component {
  static get propTypes() {
    return {
      onChange: PropTypes.func.isRequired,
    };
  }

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { onChange } = this.props;
    onChange(event.target.value);
  }

  render() {
    return (
      <div className="input">
        <label htmlFor="select-input">
          <span className="label">Order by</span>
          <select id="select-input" defaultValue="date" onChange={this.onChange}>
            <option value="_date">Date</option>
            <option value="_speed">Speed</option>
            <option value="_maxSpeed">Max speed</option>
            <option value="_distance">Distance</option>
            <option value="_duration">Duration</option>
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
