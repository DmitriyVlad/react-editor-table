import React from 'react';
import './input.scss';
import PropTypes from 'prop-types';

import { classNameModifiers } from 'Helpers/component';

const Input = (props) => {

  const classBase = 'Input';
  let input = null;

  if (props.type === 'search') {
    input = (
      <div className="pt-input-group">
        <span className={ `pt-icon pt-icon-search ${props.size ? 'pt-search-large' : ''}` } />
        <input
          type={ props.type }
          name={ props.name }
          className={ (props.isInvalid ? classNameModifiers(classBase, 'error', props.size, props.theme) : classNameModifiers(classBase, props.size, props.theme)) }
          placeholder={ props.placeholder }
          required={ props.required }
          value={ props.value }
          onChange={ props.onChange }
          onBlur={ props.onBlur }
          disabled={ props.disabled }
        />
      </div>
    );
  } else {
    input = (
      <input
        type={ props.type }
        name={ props.name }
        id={ props.id }
        className={ (props.isInvalid ? classNameModifiers(classBase, 'error', props.size, props.theme) : classNameModifiers(classBase, props.size, props.theme)) }
        placeholder={ props.placeholder }
        required={ props.required }
        value={ props.value }
        onChange={ props.onChange }
        disabled={ props.disabled }
        onBlur={ props.onBlur }
      />
    );
  }

  return input;
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  size: PropTypes.string,
  isInvalid: PropTypes.bool,
  disabled: PropTypes.bool,
  theme: PropTypes.string
};

Input.defaultProps = {
  value: '',
  onChange: null,
  onBlur: null,
  size: '',
  required: false,
  isInvalid: false,
  disabled: false,
  theme: ''
};

export default Input;
