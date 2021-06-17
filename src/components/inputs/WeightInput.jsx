import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/input.scss';

class WeightInput extends Component {
  static get propTypes() {
    return {
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      onInput: PropTypes.func.isRequired,
    };
  }

  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const { onInput } = this.props;
    const { value } = event.target;
    onInput(value);
  }

  render() {
    const { value } = this.props;
    return (
      <div className="input">
        <label>
          <span className="label">weight</span>
          <input type="number" pattern="[0-9]*" value={value} onInput={this.handleInput} />
          <span className="right">KG</span>
        </label>

      </div>
    );
  }
}

export default WeightInput;
