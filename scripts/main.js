import { getEmployees } from "./employee/employeeDataProvider.js";
import { getComputers } from "./computer/computerDataProvider.js";
import { EmployeeList } from "./employee/employeeList.js";
import { getDepartments } from "./department/departmentDataProvider.js";
import { getLocations } from "./locations/locationDataProvider.js";





getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getLocations)
    .then(EmployeeList)