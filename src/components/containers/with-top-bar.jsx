import React from 'react';
import PropTypes from 'prop-types';

import './with-top-bar.scss';

import { classNameModifiers } from 'Helpers/component';

export default function WithTopBar({
  children,
  ...props
}) {

  const classBase = 'WithTopBar';

  return (
    <header className={ classNameModifiers(classBase, props.className) }>
      {children}
    </header>
  );
}

WithTopBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

WithTopBar.defaultProps = {
  children: null,
  className: ''
};
