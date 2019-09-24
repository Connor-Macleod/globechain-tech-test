import React from 'react'
import Company from '../companies/company/company'
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom'
import Employees from '../employees/employees'
import { Redirect } from 'react-router-dom'
import Panel from '../panel/panel'


function CompanyDetails(props) {
    if (!props.company){
        return <Redirect to='/' />
    }
    return (<div>
        <Company company={props.company}/>
        <Panel title="Employees">
            <Employees employees={props.company.employees}/>
        </Panel>
    </div>)
}


function mapStateToProps (state, ownProps) {
    return {
        company: state.companies.find((company)=>{
            return (parseInt(company.id, 10) === parseInt(ownProps.match.params.id, 10))
        })
    }
}

export default withRouter(connect(mapStateToProps)(CompanyDetails))
