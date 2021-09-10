import React, { Component } from 'react';
import '../assets/css/page-compare.scss';
import remove from 'lodash/remove';
import map from 'lodash/map';
import Icon from '../components/Icon';
import Activity from '../common/Activity';
import CompareCard from '../components/CompareCard';

class CompareList extends Component {
  constructor(props) {
    super(props);

    this.sessionData = window.$session.get('compare');
    this.state = {
      activities: map(this.sessionData, (a) => new Activity(...a)),
    };

    this.removeActivity = this.removeActivity.bind(this);
    this.removeAll = this.removeAll.bind(this);
  }

  removeActivity(id) {
    const { activities } = this.state;
    const removedSessionData = remove(this.sessionData, (a) => a[0] !== id);
    this.sessionData = window.$session.set('compare', removedSessionData);
    this.setState(remove(activities, (a) => a.id === id));
  }

  removeAll() {
    const copySessionData = [...this.sessionData];
    for (let i = 0; i < copySessionData.length; i += 1) {
      this.removeActivity(copySessionData[i][0]);
    }
  }

  render() {
    const { activities } = this.state;
    const emptyCard = (
      <div className="compare-card-empty">
        <Icon name="plus-circle" size="large" color={window.primaryColor} />
        <h4 className="m-0">
          Add up to
          <br />
          three activities
        </h4>
      </div>
    );

    // To disable automatic formatting (line will be longer than 100chars)
    // eslint-disable-next-line
    const cards = map(activities, (activity) => {
      return (
        <CompareCard
          key={activity.id}
          activity={activity}
          remove={this.removeActivity}
        />
      );
    });

    return (
      <main>
        <section className="compare-title-container">
          <Icon name="minus-circle" color={window.primaryColor} right onClick={this.removeAll} />
          <h2>Compare list</h2>
        </section>
        <section className="compare-lists">
          {cards}
          {activities.length < 3 && emptyCard}
        </section>
      </main>
    );
  }
}

export default CompareList;
