import React, { useState } from 'react';

// Components
import AddEmployeeWrapper from './AddEmployeeWrapper';
import Modal from '../Modal';
import AddEmployeeForm from './AddEmployeeForm';

const AddEmployee = ({ showAddEmployeeModal, closeModal, modalAddEmployee, index }) => {
  return (
    <AddEmployeeWrapper>
      <AddEmployeeWrapper onClick={() => showAddEmployeeModal(index)}>Add New Employee</AddEmployeeWrapper>
      {modalAddEmployee === index && (
        <Modal top='-5rem' title='Add New Employee' closeModal={closeModal}>
          <AddEmployeeForm />
        </Modal>
      )}
    </AddEmployeeWrapper>
  );
};

export default AddEmployee;
