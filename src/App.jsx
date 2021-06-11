import React from 'react';
import Header from './components/Header';
import ButtonCompare from './components/ButtonCompare';
import Page from './components/Page';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'overview',
      showButton: {
        compare: true,
        profile: true,
        overview: false,
      },
    };

    this.handleNavigate = this.handleNavigate.bind(this);
  }

  handleNavigate(view) {
    const state = {
      view,
      showButton: {
        compare: view !== 'compare' && view !== 'profile',
        profile: view !== 'profile',
        overview: view !== 'overview',
      },
    };
    this.setState(state);
  }

  get title() {
    const { view } = this.state;
    switch (view) {
      case 'compare':
        return 'Compare List';
      case 'profile':
        return 'My Profile';
      case 'activity':
        return 'Activity';
      default:
        return 'Overview';
    }
  }

  render() {
    const { showButton, view } = this.state;
    return (
      <>
        <Header
          back={showButton.overview}
          profile={showButton.profile}
          title={this.title}
          onNavigate={this.handleNavigate}
        />

        <Page view={view} />

        {showButton.compare
        && <ButtonCompare onClick={() => this.handleNavigate('compare')} />}
      </>
    );
  }
}

export default App;
