import './Frame.scss';

import React from 'react';
import PropTypes from 'prop-types';

import {
  classNameElement,
  classNameModifiers
} from 'Helpers/component';

import { version } from '../../../package.json';

function Frame({
  children
}) {

  const classBase = 'Frame';

  return (
    <div className={ classNameModifiers(classBase) }>
      <div className={ classNameElement(classBase, 'Content') } >
        { children }
      </div>
      <div className={ classNameElement(classBase, 'Footer') } >
        <div className={ classNameElement(classBase, 'FooterContent') }>
          © 2017 kangaCoach. All rights reserved. { version }
        </div>
      </div>
    </div>
  );
}

Frame.propTypes = {
  children: PropTypes.node
};

Frame.defaultProps = {
  children: null
};

export default Frame;
