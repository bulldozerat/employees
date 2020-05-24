import React from 'react';
import PropTypes from 'prop-types';

// Components
import AddEmployeeWrapper from './AddEmployeeWrapper';
import Modal from '../Modal';
import AddEmployeeForm from './AddEmployeeForm';

const AddEmployee = ({ showAddEmployeeModal, closeModal, modalAddEmployee, index, companyId }) => {
  return (
    <AddEmployeeWrapper>
      <AddEmployeeWrapper onClick={() => showAddEmployeeModal(index)}>Add New Employee</AddEmployeeWrapper>
      {modalAddEmployee === index && (
        <Modal top='-5rem' title='Add New Employee' closeModal={closeModal}>
          <AddEmployeeForm companyId={companyId} closeModal={closeModal} />
        </Modal>
      )}
    </AddEmployeeWrapper>
  );
};

AddEmployee.propTypes = {
  showAddEmployeeModal: PropTypes.func,
  closeModal: PropTypes.func,
  modalAddEmployee: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  index: PropTypes.number,
  companyId: PropTypes.string
};

export default AddEmployee;
