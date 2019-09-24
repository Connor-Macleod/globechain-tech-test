import React from 'react'
import Company from './company/company'
import {connect} from "react-redux";

function Companies (props){
    const {companies} = props;

    return (<div>
        { (companies && companies.length > 0 && companies.map((company) => {
            return (<Company key={company.id} company={company} includeLink={true}/>);
        })) || <em>There are currently no companies to review</em> }
    </div>)
}

function mapStateToProps (state) {
    return {
        companies: state.companies
    }
}

export default connect(mapStateToProps)(Companies)