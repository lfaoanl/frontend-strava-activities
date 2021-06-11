import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/button-radio.scss';

class RadioInput extends Component {
  static get propTypes() {
    return {
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      options: PropTypes.objectOf(PropTypes.string).isRequired,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      value: this.getValue(),
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  getValue() {
    const { options } = this.props;
    // TODO fetch current value from localstorage
    return Object.keys(options)[0];
  }

  render() {
    const { value } = this.state;
    const { name, label, options } = this.props;
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
