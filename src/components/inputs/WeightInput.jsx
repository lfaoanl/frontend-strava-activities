import React, { Component } from 'react';
import '../../assets/css/input.scss';

class WeightInput extends Component {
  render() {
    return (
      <div className="input">
        <label htmlFor="weight-input">
          <span className="label">weight</span>
          <input type="number" id="weight-input" />
          <span className="right">KG</span>
        </label>

      </div>
    );
  }
}

export default WeightInput;
