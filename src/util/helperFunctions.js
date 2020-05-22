import { toJS } from 'mobx';

export function getIdOfProjects(jobAreaEmployees, projects) {
  let projectIds = [];

  jobAreaEmployees.map(employee => {
    const employeeId = employee.id;
    toJS(projects).map(project => {
      if (project.employeesId.includes(employeeId)) projectIds.push(employeeId);
    });
  });

  const uniqueIds = projectIds.filter(onlyUnique);
  return uniqueIds;
}

export function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

export function dateIsoParser(dateOfBirth) {
  const d = new Date(dateOfBirth);
  const month = d.getMonth();
  const day = d.getDay();
  const birthDate = `${d.getFullYear()} ${month < 10 ? '0' + month : month} ${day < 10 ? '0' + day : day}`;
  return birthDate;
}
