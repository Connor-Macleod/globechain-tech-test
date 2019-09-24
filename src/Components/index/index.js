import React from 'react'
import Panel from '../panel/panel'
import Companies from '../companies/companies'
import AddCompany from '../add-company/add-company'
import AddEmployee from '../add-employee/add-employee'


export default function Index(props) {
    return (
        <div className="index">
            <Panel title="Companies">
                <Companies companies={props.companies}/>
            </Panel>
            <AddCompany/>
            <AddEmployee companies={props.companies}/>
        </div>
    )
}
