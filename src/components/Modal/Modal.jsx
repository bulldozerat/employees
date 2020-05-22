import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Components
import ModalWrapper from './ModalWrapper';

// Other
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ children, title, closeModal }) => {
  return (
    <ModalWrapper className>
      <h3>{title}</h3>
      <div>{children}</div>
      <span onClick={closeModal} className='close'>
        <FontAwesomeIcon icon={faWindowClose} size='10px' />
      </span>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default Modal;
