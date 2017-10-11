import './burger-button.scss';
import React from 'react';
import PropTypes from 'prop-types';

import { classNameElement, classNameModifiers } from 'Helpers/component';

const BurgerButton = (props) => {

  const classBase = 'BurgerButton';
  const modifier = props.isOpen ? 'active' : '';

  return (
    <button
      className={ classNameModifiers(classBase, modifier) }
      onClick={ props.onClick }
    >
      <span className={ classNameElement(classBase, 'icon') } />
    </button>
  );
};

BurgerButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default BurgerButton;
