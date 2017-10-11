import './avatar.scss';

import React from 'react';
import PropTypes from 'prop-types';

import {
  classNameElement,
  classNameModifiers
} from 'Helpers/component';

export default function Avatar({
  label,
  size,
  imgRef,
  ...elementProps
}) {

  const classBase = 'Avatar';

  return (
    <div
      { ...elementProps }
      className={ classNameModifiers(classBase, size) }

    >
      <div className={ classNameElement(classBase, 'inner') }>
        { imgRef
          ?
            <img
              src={ imgRef }
              alt={ label }
              className={ classNameElement(classBase, 'Image') }
            />
          : label.charAt(0).toUpperCase()
        }
      </div>
    </div>
  );
}

Avatar.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string,
  imgRef: PropTypes.string
};

Avatar.defaultProps = {
  size: 'default',
  label: '',
  imgRef: null
};
