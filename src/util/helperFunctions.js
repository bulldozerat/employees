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
