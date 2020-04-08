let employees = [];

//function to export .slice() of eatery data (useEatery)

export const useEmployees = () => {
  return eateries.slice();
};

//function to get eatery data from db.json (getEateries)

export const getEmployees = () => {

  return fetch("http://localhost:9000/employees")
    .then(response => response.json())
    .then(parsedEmployees => {
      eateries = parsedEmployees;
    });
};