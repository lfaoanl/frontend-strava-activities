import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import ProfilePicture from './ProfilePicture';
import '../assets/css/header.scss';

class Header extends React.Component {
  static get propTypes() {
    return {
      onNavigate: PropTypes.func.isRequired,
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
      title, back, profile, onNavigate,
    } = this.props;
    return (
      <header>
        <h1>
          { back
          && <Icon onClick={() => onNavigate('overview')} name="chevron-left" color="white" />}
          { title }
        </h1>
        { profile
        && (
        <div onClick={() => onNavigate('profile')} className="picture-container">
          <ProfilePicture
            source="https://static8.depositphotos.com/1028979/1058/i/600/depositphotos_10580868-stock-photo-handsome-smiling-man-isolated-over.jpg"
          />
        </div>
        )}
      </header>
    );
  }
}

export default Header;
