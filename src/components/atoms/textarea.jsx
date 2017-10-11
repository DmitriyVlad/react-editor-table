import React from 'react';
import './textarea.scss';
import PropTypes from 'prop-types';

import { classNameModifiers } from 'Helpers/component';

const Textarea = (props) => {

  const classBase = 'Input';

  return (
    <textarea
      name={ props.name }
      id={ props.id }
      cols={ props.cols }
      rows={ props.rows }
      className={ (props.isInvalid ? classNameModifiers(classBase, 'error', props.size, props.className) : classNameModifiers(classBase, props.size, props.className)) }
      placeholder={ props.placeholder }
      value={ props.value }
      onChange={ props.onChange }
      readOnly={ props.readOnly }
      disabled={ props.disabled }
      required={ props.required }
    />
  );
};

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  required: PropTypes.bool.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.string,
  isInvalid: PropTypes.bool,
  disabled: PropTypes.bool,
  rows: PropTypes.number,
  cols: PropTypes.number,
  readOnly: PropTypes.bool
};

Textarea.defaultProps = {
  value: '',
  onChange: null,
  size: '',
  className: '',
  isInvalid: false,
  disabled: false,
  readOnly: false,
  rows: 3,
  cols: 3
};

export default Textarea;
