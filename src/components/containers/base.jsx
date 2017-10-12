import React from 'react';
import PropTypes from 'prop-types';

import './Base.scss';

import {
  classNameElement,
  classNameModifiers
} from 'Helpers/component';


export default function Base({
  children,
  ...props
}) {

  const classBase = 'Base';

  return (
    <div className={ classNameModifiers(classBase, props.className) }>
      <div className={ classNameElement(classBase, 'Content') } >
        { children }
      </div>
    </div>
  );
}

Base.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Base.defaultProps = {
  children: null,
  className: ''
};
