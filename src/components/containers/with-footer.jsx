import React from 'react';
import PropTypes from 'prop-types';

import './with-footer.scss';

import Base from 'Components/containers/base';

import { classNameModifiers } from 'Helpers/component';

export default function WithFooter({
  children,
  ...props
}) {

  const classBase = 'WithFooter';

  return (
    <footer className={ classNameModifiers(classBase, props.className) }>
      <Base>
        {children}
      </Base>
    </footer>
  );
}

WithFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

WithFooter.defaultProps = {
  children: null,
  className: ''
};
