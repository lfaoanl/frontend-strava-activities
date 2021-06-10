import React from 'react';
import PropTypes from 'prop-types';

class Icon extends React.Component {
  static get propTypes() {
    return {
      name: PropTypes.string.isRequired,
      color: PropTypes.string,
      size: PropTypes.oneOf(['small', 'normal', 'large']),
      className: PropTypes.string,
      onClick: PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      size: 'normal',
      color: '#2e2e2e',
      className: '',
      onClick: () => {},
    };
  }

  render() {
    const {
      name, size, color, className, onClick,
    } = this.props;
    let iconClass = `icon icon-${name} icon-${size}`;
    const style = { color };

    if (className !== '') {
      iconClass += ` ${className}`;
    }

    return (
      <span onClick={onClick} className={iconClass} style={style} />
    );
  }
}

export default Icon;
