import { useEmployees } from "../employee/employeeDataProvider.js"
import { useCustomers } from "./CustomerProvider.js";
import { useEmployeeCustomers } from "../relationships/EmployeeCustomerProvider.js";
import { Customer } from "./customer.js";


const contentTarget = document.querySelector(".customersContainer")

const render = customersToRender => {
    const employees= useEmployees()
    const customerRelationships = useEmployeeCustomers()

    contentTarget.innerHTML = customersToRender.map(
        (customerObject) => {
            const relationships = customerRelationships.filter(
                (customerRelationship => customerRelationship.customerId === customerObject.id)
            )
            const assignedEmployees = relationships.map(rel => {
                return employees.find(employee => rel.employeeId === employee.id)

                })

            return Customer(customerObject, assignedEmployees)
        }
    ).join("")
}

export const CustomerList = () => {
    const customers = useCustomers()
    render(customers)
}
