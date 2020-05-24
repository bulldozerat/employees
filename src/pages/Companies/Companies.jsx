import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Other
import { inject, observer } from 'mobx-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom, faPen } from '@fortawesome/free-solid-svg-icons';

// Components
import CompaniesWrapper from './CompaniesWrapper';
import Employees from '../../components/Employees';
import CompanyNameBox from '../../components/CompanyNameBox';
import AddEmployee from '../../components/AddEmployee';
import RenameCompany from '../../components/RenameCompany';

const Companies = ({ companyStore }) => {
  useEffect(() => {
    fetchCompaniesPageData();
  }, []);

  const [boxCompanyId, setBoxCompanyId] = useState('');
  const [modalEmployeeId, setModalEmployeeId] = useState('');
  const [modalJobArea, setModalJobArea] = useState('');
  const [modalRenameId, setmodalRenameId] = useState('');
  const [modalAddEmployee, setModalAddEmployee] = useState('');

  const fetchCompaniesPageData = async () => {
    await companyStore.fetchCompaniesData();
    await companyStore.fetchEmployeesData();
    await companyStore.fetchCompanyAddressesData();
    await companyStore.fetchProjectsData();
  };

  const showEmployeeNameModal = id => {
    hideAllModals();
    setModalEmployeeId(id);
  };

  const showJobAreaModal = index => {
    hideAllModals();
    setModalJobArea(index);
  };

  const showCompanyBoxModal = companyId => {
    hideAllModals();
    setBoxCompanyId(companyId);
  };

  const showRenameModal = id => {
    hideAllModals();
    setmodalRenameId(id);
  };

  const showAddEmployeeModal = index => {
    hideAllModals();
    setModalAddEmployee(index);
  };

  const hideAllModals = () => {
    setModalJobArea('');
    setModalEmployeeId('');
    setBoxCompanyId('');
    setmodalRenameId('');
    setModalAddEmployee('');
  };

  const { companies, employees, projects, companyAddresses } = companyStore;

  return (
    <CompaniesWrapper>
      {companies && employees && projects && companyAddresses ? (
        companies.map((company, index) => (
          <div key={company.id}>
            <div className='company-element'>
              <span onClick={() => showCompanyBoxModal(company.id)} className='company-name pointer'>
                {company.name}
              </span>
              <span className='rename-wrapper'>
                <FontAwesomeIcon
                  icon={faPen}
                  size='1x'
                  className='rename-pen'
                  onClick={() => showRenameModal(company.id)}
                />
                {company.id === modalRenameId && (
                  <RenameCompany companyName={company.name} companyId={company.id} closeModal={hideAllModals} />
                )}
              </span>
              {boxCompanyId && boxCompanyId === company.id && (
                <CompanyNameBox
                  companyId={company.id}
                  companyAddresses={companyAddresses}
                  projects={projects}
                  companyName={company.name}
                  closeModal={hideAllModals}
                />
              )}
            </div>
            <Employees
              employees={employees}
              companyId={company.id}
              projects={projects}
              showEmployeeNameModal={showEmployeeNameModal}
              showJobAreaModal={showJobAreaModal}
              hideAllModals={hideAllModals}
              modalEmployeeId={modalEmployeeId}
              modalJobArea={modalJobArea}
            />
            <AddEmployee
              modalAddEmployee={modalAddEmployee}
              closeModal={hideAllModals}
              index={index}
              showAddEmployeeModal={showAddEmployeeModal}
              companyId={company.id}
            />
          </div>
        ))
      ) : (
        <div style={{ textAlign: 'center' }}>
          <FontAwesomeIcon icon={faAtom} spin size='10x' />
        </div>
      )}
    </CompaniesWrapper>
  );
};

Companies.propTypes = {
  companyStore: PropTypes.shape({
    fetchCompaniesData: PropTypes.func,
    fetchEmployeesData: PropTypes.func,
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
    companies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string,
        business: PropTypes.string,
        slogan: PropTypes.string
      })
    ),
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string,
        department: PropTypes.string,
        employeesId: PropTypes.array,
        companyId: PropTypes.string
      })
    ),
    companyAddresses: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        city: PropTypes.string,
        country: PropTypes.string,
        street: PropTypes.string,
        state: PropTypes.string,
        companyId: PropTypes.string
      })
    )
  })
};

export default inject('companyStore')(observer(Companies));
