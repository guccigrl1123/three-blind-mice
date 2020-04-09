export const Customer = (customerObject, assignedEmployees) => {
    return `
        <div class="customer">
            <header class="customer__name">
                <h2>${customerObject.name}</h2>
            </header>
            <section class="customer__employees">
                <div>Current employees:</div>
                <ul>${
                        assignedEmployees.map(assignedEmployee=> {
                            return `<li>${assignedEmployee.firstName} ${assignedEmployee.lastName}</li>`}
                            ).join(" ")
                        }
                </ul>
            </section>
        </div>
    `  
}