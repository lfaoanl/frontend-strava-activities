import React, { Component } from 'react';
import Router from '../common/Router';
import Icon from './Icon';
import '../assets/css/button-compare.scss';

class ButtonCompare extends Component {
  render() {
    return (
      <a href={Router.getUrl('compare')} className="button-compare">
        <Icon name="scale-balance" size="large" color="white" />
      </a>
    );
  }
}

export default ButtonCompare;
