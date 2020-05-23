import { observable, action, toJS } from 'mobx';

// Other
import { v4 as uuidv4 } from 'uuid';

export class CompanyStore {
  @observable companies = null;
  @observable companyAddresses = null;
  @observable employees = null;
  @observable projects = null;

  @action async fetchCompaniesData() {
    this.companies = await fetch('http://localhost:5000/companies')
      .then(response => response.json())
      .then(data => data);
  }

  @action async fetchCompanyAddressesData() {
    this.companyAddresses = await fetch('http://localhost:5000/companyAddresses')
      .then(response => response.json())
      .then(data => data);
  }

  @action async fetchEmployeesData() {
    this.employees = await fetch('http://localhost:5000/employees')
      .then(response => response.json())
      .then(data => data);
  }

  @action async fetchProjectsData() {
    this.projects = await fetch('http://localhost:5000/projects')
      .then(response => response.json())
      .then(data => data);
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
