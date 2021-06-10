import React, { Component } from 'react';
import '../../assets/css/button-radio.scss';

class RadioInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: `radio-${Math.floor(Math.random() * 1000)}`,
    };
  }

  render() {
    const { name } = this.state;
    return (
      <div className="button-group">
        <label>
          <input name={name} type="radio" />
          <div className="button" />
        </label>
        <label>
          <input name={name} type="radio" />
          <div className="button" />
        </label>
      </div>
    );
  }
}

export default RadioInput;
