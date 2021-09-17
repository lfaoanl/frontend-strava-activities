import React from 'react';
import includes from 'lodash/includes';
import Header from './components/Header';
import ButtonCompare from './components/ButtonCompare';
import Router from './common/Router';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleNavigate = this.handleNavigate.bind(this);
    window.onhashchange = () => Router.handleUrlChange(this.handleNavigate);

    const route = Router.parseRoute();
    this.state = {
      route,
      athlete: null,
      showButton: App.getMenuVisibility(route.name),
    };

    this.compare = React.createRef();
  }

  componentDidMount() {
    const loginViaRefresh = window.$strava.api.auth && !window.$session.has('athlete');
    if (includes(window.location.search, 'code')
      || loginViaRefresh) {
      window.$strava.login(window.$strava.api.auth).then((athlete) => {
        this.setState({ athlete }, () => {
          window.location.search = '';
          Router.navigate('overview');
          // TODO fadeOut login loader and handle urlChange
        });
      });
    }
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
      compare: view !== 'compare' && view !== 'profile' && view !== 'login',
      profile: view !== 'profile',
      overview: view !== 'overview',
    };
  }

  get title() {
    const { route } = this.state;
    return route.title;
  }

  render() {
    const { showButton, route, athlete } = this.state;

    return (
      <>
        { route.name !== 'login' && (
        <Header
          athlete={athlete}
          back={showButton.overview}
          profile={showButton.profile}
          title={route.title}
        />
        ) }

        { Router.getView(route.name) }

        {showButton.compare
        && <ButtonCompare ref={this.compare} />}
      </>
    );
  }
}

export default App;
