import './icon.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon as BlueprintIcon } from '@blueprintjs/core';

import { classNameModifiers } from 'Helpers/component';

const Icon = ({ intent, theme, size, ...iconProps }) => {

  const classBase = 'Icon';
  let iconSize = '';

  if (size) {
    iconSize = BlueprintIcon[`SIZE_${size.toUpperCase()}`];
  }

  return (
    <BlueprintIcon
      { ...iconProps }
      className={ classNameModifiers(classBase, theme) }
      iconSize={ iconSize }
      intent={ intent }
    />
  );
};

Icon.propTypes = {
  size: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  intent: PropTypes.number,
  theme: PropTypes.string
};

Icon.defaultProps = {
  size: '',
  intent: -1,
  theme: ''
};

export default Icon;
