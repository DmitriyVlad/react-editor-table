import React from 'react';
import './label.scss';
import PropTypes from 'prop-types';

const Label = (props) => {

  const classBase = 'Label';

  return (
    <label
      htmlFor={ props.htmlFor }
      className={ classBase }
    >
      { props.text }
    </label>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Label;
