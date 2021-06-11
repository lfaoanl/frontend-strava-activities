import React, { Component } from 'react';
import '../assets/css/page-compare.scss';
import Icon from '../components/Icon';
import CompareCard from '../components/CompareCard';

class CompareList extends Component {
  render() {
    return (
      <main>
        <section className="compare-title-container">
          <Icon name="minus-circle" color={window.primaryColor} right />
          <h2>Compare list</h2>
        </section>
        <section className="compare-lists">
          <CompareCard />
          <CompareCard />
          <div className="compare-card-empty">
            <Icon name="plus-circle" size="large" color={window.primaryColor} />
            <h4 className="m-0">
              Add up to
              <br />
              three activities
            </h4>
          </div>
        </section>
      </main>
    );
  }
}

export default CompareList;
