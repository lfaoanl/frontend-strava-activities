import React from 'react';
import Header from './components/Header';
import ButtonCompare from './components/ButtonCompare';
import Page from './components/Page';

class App extends React.Component {
  constructor(props) {
    super(props);
    const viewFromHash = this.getViewFromHash();
    this.state = {
      view: viewFromHash,
      showButton: App.getMenuVisibility(viewFromHash),
    };

    this.handleNavigate = this.handleNavigate.bind(this);
    window.onhashchange = this.handleUrlChange.bind(this);
  }

  handleUrlChange() {
    const view = this.getViewFromHash();
    this.handleNavigate(view);
  }

  handleNavigate(view) {
    const state = {
      view,
      urlData: [],
      showButton: App.getMenuVisibility(view),
    };
    this.setState(state);
    window.location.hash = `#/${view}`;
  }

  static getMenuVisibility(view) {
    return {
      compare: view !== 'compare' && view !== 'profile',
      profile: view !== 'profile',
      overview: view !== 'overview',
    };
  }

  getViewFromHash() {
    const split = window.location.hash.split('/');
    this.setState({ urlData: split.slice(2) });
    return split[1];
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
    const { showButton, view, urlData } = this.state;
    return (
      <>
        <Header
          back={showButton.overview}
          profile={showButton.profile}
          title={this.title}
          onNavigate={this.handleNavigate}
        />

        <Page view={view} urlData={urlData} />

        {showButton.compare
        && <ButtonCompare onClick={() => this.handleNavigate('compare')} />}
      </>
    );
  }
}

export default App;
