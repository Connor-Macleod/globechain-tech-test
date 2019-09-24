import React from 'react'
import Panel from "../panel/panel";

import { connect } from 'react-redux'
import { addCompany } from '../../actions'

class AddCompany extends React.Component {
    constructor(props) {
        super(props);

        this.defaultState = {
            companyName: '',
            companyAddress: '',
            companyRevenue: '',
            companyPhone: ''
        };
        this.state = this.defaultState;

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(field){
        const holdThis = this;
        return (event)=>{
            const updatedState = {};
            updatedState[field] = event.target.value;
            holdThis.setState( updatedState )
        }
    }
    handleSubmit(event){
        this.props.dispatch(addCompany(this.state));
        this.setState(this.defaultState);
        event.preventDefault();
    }

    renderInput(id, title) {
        return (
            <div>
                <label htmlFor={id}>{title}<br/></label>
                <input id={id} value={this.state[id]} onChange={ this.handleChange(id) } required={true}/>
            </div>
        )
    }

    render() {

        return (
            <Panel title="Add New Company">
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('companyName', 'Name')}
                    {this.renderInput('companyAddress', 'Address')}
                    {this.renderInput('companyRevenue', 'Revenue')}
                    {this.renderInput('companyPhone', 'Phone')}
                    <button type="submit" value="save">Save</button>
                </form>
            </Panel>
        )
    }
}


export default connect()(AddCompany)