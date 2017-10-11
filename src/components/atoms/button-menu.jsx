import './button-menu.scss';
import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonMenu(props) {

  const classBase = 'ButtonMenu';

  return (
    <button
      className={ classBase }
      onClick={ props.onClick }
    />
  );
}

ButtonMenu.propTypes = {
  onClick: PropTypes.func
};

ButtonMenu.defaultProps = {
  onClick: null
};
