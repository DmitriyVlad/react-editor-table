import './modal-title.scss';
import React from 'react';
import PropTypes from 'prop-types';

const ModalTitle = (props) => {

  const classBase = 'ModalTitle';

  return (
    <h5 className={ classBase }>
      {props.text}
    </h5>
  );
};

ModalTitle.propTypes = {
  text: PropTypes.string.isRequired
};

export default ModalTitle;
