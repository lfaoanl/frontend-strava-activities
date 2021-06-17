import React from 'react';
import PropTypes from 'prop-types';
import StatisticIcon from './StatisticIcon';

class RecordCards extends React.Component {
  static get propTypes() {
    return {
      cards: PropTypes.arrayOf(PropTypes.object).isRequired,
    };
  }

  render() {
    const cards = [];
    const { cards: cardsProp } = this.props;

    for (let i = 0; i < cardsProp.length; i += 1) {
      cards.push(
        <StatisticIcon card />,
      );
    }

    return (
      <div className="record-cards">
        {cards}
      </div>
    );
  }
}

export default RecordCards;
