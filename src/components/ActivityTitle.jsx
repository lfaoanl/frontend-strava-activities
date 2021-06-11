import React, { Component } from 'react';
import Icon from './Icon';

class ActivityTitle extends Component {
  render() {
    return (
      <>
        <Icon name="plus" color={window.primaryColor} size="small" className="add-to-compare-list" />
        <h2>Sunday Afternoon Run</h2>
        <time>21/07/2021</time>
      </>
    );
  }
}

export default ActivityTitle;
