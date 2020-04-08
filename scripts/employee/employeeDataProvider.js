let employees = [];

export const useEmployees = () => {
  return employees.slice();
};

export const getEmployees = () => {

  return fetch("http://localhost:8000/employees")
    .then(response => response.json())
    .then(parsedEmployees => {
      employees = parsedEmployees
    });
};