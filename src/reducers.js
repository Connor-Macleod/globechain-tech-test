const initialState = {companies: []};

export default function companiesApp(state = initialState, action) {
    switch (action.type) {
        case "ADD_COMPANY":
                action.company.id = state.companies.length + 1;
                return Object.assign({}, state, {
                    companies: [
                        ...state.companies,
                        action.company
                    ]
                });
        case "ADD_EMPLOYEE":
            if (!state.companies[parseInt(action.employee.employeeEmployer, 10)-1]){
                return state;
            }
            const clonedState = Object.assign({}, state);
            if (!clonedState.companies[parseInt(action.employee.employeeEmployer, 10)-1].employees){
                clonedState.companies[parseInt(action.employee.employeeEmployer, 10)-1].employees = [];
            }
            clonedState.companies[parseInt(action.employee.employeeEmployer, 10)-1].employees.push(action.employee);
            return clonedState;
        default:
            return state;
    }
}
