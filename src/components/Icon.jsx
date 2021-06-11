import React from 'react';
import PropTypes from 'prop-types';

class Icon extends React.Component {
  static get propTypes() {
    return {
      name: PropTypes.string.isRequired,
      color: PropTypes.string,
      size: PropTypes.oneOf(['small', 'normal', 'large']),
      // className: PropTypes.string,
      right: PropTypes.bool,
      onClick: PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      right: false,
      size: 'normal',
      color: '',
      onClick: () => {},
    };
  }

  render() {
    const {
      name, size, color, right, onClick,
    } = this.props;
    let iconClass = `icon icon-${name} icon-${size}`;
    const style = { };

    if (color) {
      style.color = color;
    }

    if (right) {
      iconClass += ' right';
    }

    return (
      <span onClick={onClick} className={iconClass} style={style} />
    );
  }
}

export default Icon;
