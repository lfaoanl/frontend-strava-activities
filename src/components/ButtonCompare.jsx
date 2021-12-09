import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import '../assets/css/button-compare.scss';

class ButtonCompare extends Component {
  render() {
    let compareCount = 0;
    if (window.$session.has('compare')) {
      compareCount = window.$session.get('compare').length;
    }

    return (
      <Link to="/compare" className="button-compare">
        <Icon name="scale-balance" size="large" color="white" />
        { compareCount > 0 && <div className="button-compare-count">{compareCount}</div> }
      </Link>
    );
  }
}

export default ButtonCompare;
