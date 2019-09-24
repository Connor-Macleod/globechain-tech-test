import React from 'react'

export default function Employee (props){
    const {
        employee: {
            employeeName: name,
            employeeAddress: address
        }
    } = props;

    return (<div>
        <div className="employee-name"><h5>{ name }</h5></div>
        <div className="employee-body">
            {address && (
                <span><strong>Address:</strong><br />
                    { address }
                </span>
            )
            }
        </div>
    </div>)
}