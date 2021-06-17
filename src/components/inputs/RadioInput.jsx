import React, { Component } from 'react';
import PropTypes from 'prop-types';
import find from 'lodash/find';
import '../../assets/css/button-radio.scss';

class RadioInput extends Component {
  static get propTypes() {
    return {
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      options: PropTypes.objectOf(PropTypes.string).isRequired,
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
    };
  }

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;

    const { onChange } = this.props;
    onChange(value);
  }

  getValue() {
    const { options, value } = this.props;

    return find(options, { value });
  }

  render() {
    const {
      name, label, options, value,
    } = this.props;
    const keys = Object.keys(options);
    return (
      <>
        <h4 className="m-14">{label}</h4>
        <div className="button-group">
          <label>
            <input name={name} type="radio" value={keys[0]} checked={value === keys[0]} onChange={this.handleChange} />
            <div className="button radio">{options[keys[0]]}</div>
          </label>
          <label>
            <input name={name} type="radio" value={keys[1]} checked={value === keys[1]} onChange={this.handleChange} />
            <div className="button radio">{options[keys[1]]}</div>
          </label>
        </div>
      </>
    );
  }
}

export default RadioInput;
