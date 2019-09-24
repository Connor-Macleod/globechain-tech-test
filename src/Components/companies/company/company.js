import React from 'react'

import {Link} from 'react-router-dom'

export default function Company (props){
    const {
        company: {
            id,
            companyName: name,
            companyAddress: address,
            companyRevenue: revenue,
            companyPhone: phone
        },
        includeLink
    } = props;

    return (<div>
        <div className="company-name"><h3>{(includeLink && <Link to={ '/company/' + id }>{name || "Unnamed"}</Link>) || name || "Unnamed"}</h3></div>
        <div className="company-body">
            {address && (
                <span><strong>Address:</strong><br />
                    { address }
                </span>
            )
            }<br /><br />
            {revenue && (
                <span><strong>Revenue:</strong><br/>
                    {revenue}
                </span>
            )
            }<br /><br />
            {phone && (
                <span><strong>Phone:</strong><br />
                { phone }
                </span>
                )
            }
        </div>
        {includeLink && <div className="companyOverview">
            <Link to={ '/company/' + id }>Company Overview</Link>
        </div>}
    </div>)
}