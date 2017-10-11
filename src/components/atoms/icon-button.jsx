import './icon-button.scss';
import React from 'react';
import PropTypes from 'prop-types';

const IconButton = (props) => {

  let classBase = `IconButton pt-button ${props.iconClass}`;

  if (props.disabled) {
    classBase += ' pt-disabled';
  }

  if (props.active) {
    classBase += ' pt-active';
  }

  return (
    <button
      type="button"
      className={ classBase }
      onClick={ props.onClick }
    />
  );
};

IconButton.propTypes = {
  iconClass: PropTypes.string.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

IconButton.defaultProps = {
  active: false,
  disabled: false,
  onClick: null
};

export default IconButton;
