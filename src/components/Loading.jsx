import React, { Component } from 'react';
import '../assets/css/loading.scss';
import PropTypes from 'prop-types';

class Loading extends Component {
  static get propTypes() {
    return {
      message: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      message: 'Fetching data...',
    };
  }

  render() {
    const { message } = this.props;
    return (
      <main className="loading">
        <div className="lds-ring">
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="message">{message}</div>
      </main>
    );
  }
}

export default Loading;
