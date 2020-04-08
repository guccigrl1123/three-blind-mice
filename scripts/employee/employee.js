export const Employee = (employeeObject, computerObject, departmentObject, locationObject) => {
    return `
        <div class="employee">
            <header class="employee__name">
                <h2>${employeeObject.firstName} ${employeeObject.lastName}</h2>
                <div>${employeeObject.age}</div>
            </header>
            <section class="employee__computer">
                <div>Current computer: ${computerObject.year} ${computerObject.model}</div>
            </section>
            <section class="employee__department">
                <div> Works in the ${departmentObject.department} department</div>
            </section>
            <section class="employee__location">
                <div> Works at ${locationObject.city} location</div>
            </section>
    `  
}
