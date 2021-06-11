import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/input.scss';

class WeightInput extends Component {
  static get propTypes() {
    return {
      value: PropTypes.string.isRequired,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      _value: props.value,
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ _value: event.target.value });
  }

  render() {
    const { _value } = this.state;
    return (
      <div className="input">
        <label>
          <span className="label">weight</span>
          <input type="number" pattern="[0-9]*" value={_value} onInput={this.handleInput} />
          <span className="right">KG</span>
        </label>

      </div>
    );
  }
}

export default WeightInput;
