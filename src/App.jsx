import React from 'react';
import includes from 'lodash/includes';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Overview from './views/Overview';
import Activity from './views/Activity';
import Profile from './views/Profile';
import CompareList from './views/CompareList';
import Login from './views/Login';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.compare = React.createRef();

    this.state = {
      navigate: false,
      athlete: window.$session.get('athlete'),
    };
  }

  componentDidMount() {
    const loginViaRefresh = window.$strava.api.auth && !window.$session.has('athlete');
    if (includes(window.location.search, 'code')
      || loginViaRefresh) {
      window.$strava.login(window.$strava.api.auth).then((athlete) => {
        this.setState({ navigate: '/', athlete }, () => {
          window.location.search = '';
        });
      });
    }
  }

  static getMenuVisibility() {
    const view = App.getPath();
    return {
      compare: view !== 'compare' && view !== 'profile',
      profile: view !== 'profile',
      overview: view !== 'overview',
    };
  }

  static getTitle() {
    return App.getPath();
  }

  static getPath() {
    return window.location.pathname.split('/')[1] || 'overview';
  }

  requireAuth(nextState, replace, next) {
    const { athlete } = this.state;

    if (athlete === null) {
      replace({
        pathname: '/login',
      });
    }
    next();
  }

  render() {
    const { navigate, athlete } = this.state;
    const OverviewPage = (
      <Header title="Overview" back={false}>
        <Overview />
      </Header>
    );

    return (
      <>
        <Routes>
          { athlete !== null && (
          <Route path="/">
            <Route
              index
              element={OverviewPage}
            />
            <Route path="*" element={OverviewPage} />
            <Route
              path="compare"
              element={(
                <Header title="Compare" compare={false}>
                  <CompareList />
                </Header>
              )}
            />
            <Route
              path="profile"
              element={(
                <Header title="Profile" profile={false}>
                  <Profile />
                </Header>
              )}
            />
            <Route
              path="activity/:id"
              element={(
                <Header title="Activity">
                  <Activity />
                </Header>
              )}
            />
          </Route>
          )}

          {athlete == null
          && <Route path="*" element={<Login />} />}
        </Routes>
        { navigate && <Navigate to={navigate} /> }
      </>
    );
  }
}

export default App;
