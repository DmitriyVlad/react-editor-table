import React from 'react';
import PropTypes from 'prop-types';
import './InputError.scss';

import { classNameModifiers } from 'Helpers/component';

const InputError = (props) => {

  const isVisible = !!props.errorText;
  const classBase = 'ErrorMessage';

  return (
    <div className={ (isVisible ? `${classNameModifiers(classBase, 'visible')}` : `${classNameModifiers(classBase, 'invisible')}`) }>
      <span>{ props.errorText }</span>
    </div>
  );
};

InputError.propTypes = {
  errorText: PropTypes.string
};

InputError.defaultProps = {
  errorText: ''
};

export default InputError;
