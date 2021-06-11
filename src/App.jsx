import React from 'react';
import Header from './components/Header';
import ButtonCompare from './components/ButtonCompare';
import Router from './common/Router';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleNavigate = this.handleNavigate.bind(this);
    window.onhashchange = () => Router.handleUrlChange(this.handleNavigate);

    this.state = {
      route: Router.defaultRoute,
      showButton: App.getMenuVisibility('overview'),
    };

    Router.handleUrlChange(this.handleNavigate);
  }

  handleNavigate(route) {
    const state = {
      route,
      showButton: App.getMenuVisibility(route.name),
    };
    this.setState(state);
  }

  static getMenuVisibility(view) {
    return {
      compare: view !== 'compare' && view !== 'profile',
      profile: view !== 'profile',
      overview: view !== 'overview',
    };
  }

  get title() {
    const { route } = this.state;
    return route.title;
  }

  render() {
    const { showButton, route } = this.state;
    return (
      <>
        <Header
          back={showButton.overview}
          profile={showButton.profile}
          title={route.title}
        />

        { Router.getView(route.name) }

        {showButton.compare
        && <ButtonCompare />}
      </>
    );
  }
}

export default App;
