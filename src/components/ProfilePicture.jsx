import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../assets/css/profile-picture.scss';

class ProfilePicture extends Component {
  static get propTypes() {
    return {
      source: PropTypes.string.isRequired,
    };
  }

  render() {
    const { source } = this.props;
    return (
      <figure className="profile-picture">
        <img src={source} alt="My profile" />
      </figure>
    );
  }
}

export default ProfilePicture;
