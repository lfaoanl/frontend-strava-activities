import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Overview from '../views/Overview';

class Page extends Component {
  static get propTypes() {
    return {
      view: PropTypes.string.isRequired,
    };
  }

  getViewComponent() {
    const { view } = this.props;
    if (view === 'kaas') {
      return <div />;
    }
    return <Overview />;
  }

  render() {
    const viewComponent = this.getViewComponent();

    return viewComponent;
  }
}

export default Page;
