import React from 'react';
import PropTypes from 'prop-types';
import forEach from 'lodash/forEach';
import StatisticIcon from './StatisticIcon';
import Loading from './Loading';

class RecordCards extends React.Component {
  static get propTypes() {
    return {
      cards: PropTypes.arrayOf(PropTypes.object).isRequired,
    };
  }

  render() {
    const cards = [];
    const { cards: cardsProp } = this.props;

    forEach(cardsProp, (card, i) => {
      cards.push(
        <StatisticIcon card key={i} icon={card.icon} title={card.value} subtitle={card.unit} />,
      );
    });

    if (cards.length === 0) {
      return (<Loading />);
    }

    return (
      <div className="record-cards">
        {cards}
      </div>
    );
  }
}

export default RecordCards;
