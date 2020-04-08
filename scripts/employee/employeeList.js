import { Employee } from "./employee";
import { useEmployees, getEmployees } from "./employeeDataProvider";

const contentTarget = document.querySelector(".employeesContainer")

const render = () => {
    const computers = useComputers()
        contentTarget.innerHTML = allTheEmployees.map(
            (employeeObject)=> {
                const foundComputer = computers.find(
                    (computer) => {
                        return computer.id === employeeObject.computerId
                    }
                )
                return Employee(employeeObject, foundComputer)
            }
        ).join("")
    }

export const EmployeeList = () => {
    const employees = useEmployees()
    render(employees)
}
