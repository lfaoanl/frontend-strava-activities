import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import ProfilePicture from './ProfilePicture';
import '../assets/css/header.scss';
import Router from '../common/Router';

class Header extends React.Component {
  static get propTypes() {
    return {
      back: PropTypes.bool,
      profile: PropTypes.bool,
      title: PropTypes.string.isRequired,
    };
  }

  static get defaultProps() {
    return {
      back: true,
      profile: true,
    };
  }

  render() {
    const {
      title, back, profile,
    } = this.props;
    return (
      <header>
        <h1>
          { back
          && <a href={Router.getUrl('overview')}><Icon name="chevron-left" color="white" /></a>}
          { title }
        </h1>
        { profile
        && (
        <a href={Router.getUrl('profile')} className="picture-container">
          <ProfilePicture />
        </a>
        )}
      </header>
    );
  }
}

export default Header;
