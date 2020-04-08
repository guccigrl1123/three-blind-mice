import { Employee } from "./employee.js";
import { useEmployees } from "./employeeDataProvider.js";
import { useDepartments } from "../department/departmentDataProvider.js";
import { useComputers } from "../computer/computerDataProvider.js";
import { useLocations } from "../locations/locationDataProvider.js";


const contentTarget = document.querySelector(".employeesContainer")

const render = employeesToRender => {
    const computers = useComputers()
    const departments = useDepartments()
    const locations = useLocations()

    contentTarget.innerHTML = employeesToRender.map(
        (employeeObject) => {
            // Find the related computer for the current employee
            const foundComputer = computers.find(
                (computer) => {
                    return computer.id === employeeObject.computerId
                })
            const foundDepartment = departments.find (
                (department) => {
                    return department.id === employeeObject.departmentId
                }
            )
            const foundLocation = locations.find (
                (location) => {
                    return location.id === employeeObject.cityId
                }
            )
            return Employee(employeeObject, foundComputer, foundDepartment, foundLocation)
        }
    ).join("")
}

export const EmployeeList = () => {
    const employees = useEmployees()
    render(employees)
}
