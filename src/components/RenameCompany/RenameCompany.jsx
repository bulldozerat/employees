import React, { useState } from 'react';

// Other
import { inject } from 'mobx-react';

// Components
import Modal from '../Modal';

const RenameCompany = ({ companyName, companyId, companyStore, closeModal }) => {
  const [inputCompantyValue, setInputCompantyValue] = useState('');

  const changeCompanyName = () => {
    companyStore.renameCompany(companyId, inputCompantyValue);
  };

  return (
    <Modal right='0' title={companyName} closeModal={closeModal}>
      <div>Enter company name: </div>
      <input placeholder='' onChange={e => setInputCompantyValue(e.target.value)} />
      <button onClick={changeCompanyName}>Change name</button>
    </Modal>
  );
};

export default inject('companyStore')(RenameCompany);
