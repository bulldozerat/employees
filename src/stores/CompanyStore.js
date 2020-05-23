import { observable, action, toJS } from 'mobx';

import companies from '../json-data/companies.json';
import companyAddresses from '../json-data/company-addresses.json';
import employees from '../json-data/employees.json';
import projects from '../json-data/projects.json';

// Other
import { v4 as uuidv4 } from 'uuid';

export class CompanyStore {
  @observable companies = null;
  @observable companyAddresses = null;
  @observable employees = null;
  @observable projects = null;
  @observable companyAddress = null;

  @action fetchCompaniesData() {
    this.companies = companies;
  }

  @action fetchCompanyAddressesData() {
    this.companyAddresses = companyAddresses;
  }

  @action fetchEmployeesData() {
    this.employees = employees;
  }

  @action fetchProjectsData() {
    this.projects = projects;
  }

  @action removeEmployee(employeeId) {
    this.employees = this.employees.filter(employee => employee.id !== employeeId);
  }

  @action renameCompany(companyId, inputCompantyValue) {
    this.companies.map(company => {
      if (company.id === companyId) {
        company.name = inputCompantyValue;
      }
    });
  }

  @action addNewEmploee(formValues, companyId) {
    const newEmployeeData = {
      id: uuidv4(),
      companyId,
      ...formValues
    };

    this.employees = [...this.employees, { ...newEmployeeData }];
  }
}

export default new CompanyStore();
