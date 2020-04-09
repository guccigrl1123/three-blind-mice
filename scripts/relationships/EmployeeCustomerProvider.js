let employeeCustomers = []

export const useEmployeeCustomers = () => {
    return employeeCustomers.slice()
}

export const getEmployeeCustomers = () => {
    return fetch("http://localhost:8000/employeeCustomers")
        .then(response => response.json())
        .then(
            (parsedemployeeCustomers) => {
                employeeCustomers = parsedemployeeCustomers
            }
        )
}