import { getEmployees } from "./employee/employeeDataProvider";
import { getComputers } from "./computer/computerDataProvider";
import { EmployeeList } from "./employee/employeeList";





getEmployees()
    .then(getComputers)
    .then(EmployeeList)