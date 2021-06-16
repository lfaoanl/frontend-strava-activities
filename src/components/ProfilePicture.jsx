import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../assets/css/profile-picture.scss';

class ProfilePicture extends Component {
  static get propTypes() {
    return {
      source: PropTypes.string,
      large: PropTypes.bool,
    };
  }

  static get defaultProps() {
    const athlete = window.$session.get('athlete');
    return {
      large: false,
      source: athlete.profile,
    };
  }

  render() {
    const { large, source } = this.props;
    return (
      <figure className={`profile-picture ${large && 'large'}`}>
        <img src={source} alt="My profile" />
      </figure>
    );
  }
}

export default ProfilePicture;
