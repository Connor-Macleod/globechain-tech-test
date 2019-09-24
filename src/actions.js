

export function addCompany(company) {
    return {
        type: "ADD_COMPANY",
        company
    }
}

export function addEmployee(employee) {
    return {
        type: "ADD_EMPLOYEE",
        employee
    }
}