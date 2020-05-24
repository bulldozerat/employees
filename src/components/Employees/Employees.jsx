import React from 'react';
import PropTypes from 'prop-types';

// Other
import { toJS } from 'mobx';
import { inject } from 'mobx-react';
import { getIdOfProjects } from '../../util/helperFunctions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { dateIsoParser } from '../../util/helperFunctions';
import { uid } from 'react-uid';

// Components
import EmployeesWrapper from './EmployeesWrapper';
import Modal from '../Modal';

const Employees = ({
  employees,
  companyId,
  projects,
  hideAllModals,
  showJobAreaModal,
  showEmployeeNameModal,
  modalEmployeeId,
  modalJobArea,
  companyStore
}) => {
  const deleteEmployee = employeeId => {
    hideAllModals();
    companyStore.removeEmployee(employeeId);
  };

  return employees.map((employee, index) => {
    if (employee.companyId !== companyId) return null;

    const { firstName, lastName, jobType, jobTitle, jobArea, id, dateOfBirth } = employee;
    const employeeProjects = toJS(projects).filter(project => project.employeesId.includes(id));
    const jobAreaEmployees = toJS(employees).filter(employee => employee.jobArea === jobArea);
    const participationProjectsIds = getIdOfProjects(jobAreaEmployees, projects);

    return (
      <EmployeesWrapper key={id}>
        <div className='employees-job-area-wrapper'>
          <span className='pointer' onClick={() => showJobAreaModal(index)}>
            {jobArea}
          </span>
          <FontAwesomeIcon icon={faTrash} className='trash' onClick={() => deleteEmployee(employee.id)} />
          {modalJobArea === index && (
            <Modal title={jobArea} closeModal={hideAllModals} left='1rem'>
              <div>Workers in job area: {jobAreaEmployees.length}</div>
              <div>Project participation: {participationProjectsIds.length}</div>
            </Modal>
          )}
        </div>

        <div className='employees-name-wrapper'>
          <span className='pointer' onClick={() => showEmployeeNameModal(id)}>
            {firstName} {lastName}
          </span>
          {modalEmployeeId === id && (
            <Modal title={`${firstName} ${lastName}`} closeModal={hideAllModals}>
              <div>Employee details:</div>
              <div>{jobTitle}</div>
              <div>
                {jobArea} {jobType}
              </div>
              <div>{dateOfBirth.legth === 10 ? dateOfBirth : dateIsoParser(dateOfBirth)}</div>
              <hr />
              <div>Employee projects: </div>
              {employeeProjects.length ? (
                employeeProjects.map(project => <div key={uid(project)}>{project.name}</div>)
              ) : (
                <div>No data available for emploee projects</div>
              )}
            </Modal>
          )}
        </div>
      </EmployeesWrapper>
    );
  });
};

Employees.propTypes = {
  companyId: PropTypes.string.isRequired,
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      dateOfBirth: PropTypes.string,
      companyId: PropTypes.string.isRequired,
      jobTitle: PropTypes.string,
      jobArea: PropTypes.string,
      jobType: PropTypes.string
    })
  ),
  projects: PropTypes.array,
  hideAllModals: PropTypes.func,
  showJobAreaModal: PropTypes.func,
  showEmployeeNameModal: PropTypes.func,
  modalEmployeeId: PropTypes.string,
  modalJobArea: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  companyStore: PropTypes.shape({
    removeEmployee: PropTypes.func
  })
};

export default inject('companyStore')(Employees);
