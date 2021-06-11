import React, { Component } from 'react';
import '../assets/css/compare-card.scss';
import Statistic from './Statistic';
import Icon from './Icon';

class CompareCard extends Component {
  render() {
    return (
      <div className="compare-card">
        <div className="compare-card-header">
          <h2>Sunday afternoon</h2>
          <time>21/07/2021</time>
        </div>

        <div className="stats-list">
          <div>
            <Statistic label="speed" value="12 km/h" />
            <Statistic value="5 min/km" />
          </div>
          <Statistic label="speed" value="12 km/h" />
          <Statistic label="speed" value="12 km/h" />
          <div className="icon-container">
            <Icon name="minus-circle" size="large" color={window.primaryColor} />
          </div>
        </div>
      </div>
    );
  }
}

export default CompareCard;
