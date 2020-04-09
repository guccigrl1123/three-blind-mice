import { getEmployees } from "./employee/employeeDataProvider.js";
import { getComputers } from "./computer/computerDataProvider.js";
import { EmployeeList } from "./employee/employeeList.js";
import { getDepartments } from "./department/departmentDataProvider.js";
import { getLocations } from "./locations/locationDataProvider.js";
import { getEmployeeCustomers } from "./relationships/EmployeeCustomerProvider.js";
import { getCustomers } from "./customers/CustomerProvider.js";





getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getLocations)
    .then(getCustomers)
    .then(getEmployeeCustomers)
    .then(EmployeeList)