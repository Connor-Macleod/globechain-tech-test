import React from 'react'
import Employee from './employee/employee'

export default function Employees (props){
    const {employees} = props;

    return (<div>
        { employees && employees.length >=0 && employees.map((employee) => {
            return (<Employee key={employee.id} employee={employee} includeLink={true}/>);
        }) }
    </div>)
}