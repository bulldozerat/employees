import { observable, action } from 'mobx';

import companies from '../json-data/companies.json';
import companyAddresses from '../json-data/company-addresses.json';
import employees from '../json-data/employees.json';
import projects from '../json-data/projects.json';

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
}

export default new CompanyStore();
