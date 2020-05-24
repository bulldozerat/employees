import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Other
import { inject } from 'mobx-react';

// Components
import Modal from '../Modal';

const RenameCompany = ({ companyName, companyId, companyStore, closeModal }) => {
  const [inputCompantyValue, setInputCompantyValue] = useState('');

  const changeCompanyName = () => {
    closeModal();
    companyStore.renameCompany(companyId, inputCompantyValue);
  };

  return (
    <Modal right='0' title={companyName} closeModal={closeModal}>
      <div style={{ marginBottom: '0.5rem' }}>Enter company name: </div>
      <input placeholder='' onChange={e => setInputCompantyValue(e.target.value)} />
      <button onClick={changeCompanyName} className='button' style={{ marginLeft: '0.5rem' }}>
        Change name
      </button>
    </Modal>
  );
};

RenameCompany.propTypes = {
  companyName: PropTypes.string,
  companyId: PropTypes.string,
  closeModal: PropTypes.func,
  companyStore: PropTypes.shape({
    closeModal: PropTypes.func
  })
};

export default inject('companyStore')(RenameCompany);
