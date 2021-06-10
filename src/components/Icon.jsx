import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-unused-state */
class Icon extends React.Component {
  render() {
    const { name, size, color } = this.props;
    const iconClass = `icon-${name} icon-${size}`;
    const style = { color };
    return (
      <span className={iconClass} style={style} />
    );
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
};

Icon.defaultProps = {
  size: 'normal',
  color: '#2e2e2e',
};

export default Icon;
