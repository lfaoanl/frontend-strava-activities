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
    return {
      large: false,
      source: 'https://static8.depositphotos.com/1028979/1058/i/600/depositphotos_10580868-stock-photo-handsome-smiling-man-isolated-over.jpg',
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
