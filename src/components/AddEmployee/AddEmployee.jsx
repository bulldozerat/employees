import React from 'react';

// Components
import AddEmployeeWrapper from './AddEmployeeWrapper';
import Modal from '../Modal';
import AddEmployeeForm from './AddEmployeeForm';

const AddEmployee = () => {
  return (
    <AddEmployeeWrapper>
      <AddEmployeeWrapper>Add New Employee</AddEmployeeWrapper>
      <Modal top='-5rem' title='Add New Employee'>
        <AddEmployeeForm />
      </Modal>
    </AddEmployeeWrapper>
  );
};

export default AddEmployee;
