import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import ProfilePicture from './ProfilePicture';
import '../assets/css/header.scss';
import ButtonCompare from './ButtonCompare';

class Header extends React.Component {
  static get propTypes() {
    return {
      back: PropTypes.bool,
      profile: PropTypes.bool,
      title: PropTypes.string.isRequired,
      compare: PropTypes.bool,
    };
  }

  static get defaultProps() {
    return {
      back: true,
      profile: true,
      compare: true,
    };
  }

  constructor(props) {
    super(props);

    window.$compare = React.createRef();
  }

  render() {
    const {
      title,
      back,
      profile,
      compare,
      // eslint-disable-next-line react/prop-types
      children,
    } = this.props;

    return (
      <>
        <header>
          <h1>
            {back
            && <Link to="/"><Icon name="chevron-left" color="white" /></Link>}
            <span className="capitalize">{title}</span>
          </h1>
          {profile
          && (
            <Link to="/profile" className="picture-container">
              <ProfilePicture />
            </Link>
          )}
        </header>
        { children }
        { compare
         && <ButtonCompare ref={window.$compare} />}
      </>
    );
  }
}

export default Header;
