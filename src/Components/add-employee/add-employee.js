import React from 'react'
import Panel from "../panel/panel";


import { connect } from 'react-redux'
import { addEmployee } from '../../actions'

class AddEmployee extends React.Component {
    constructor(props) {
        super(props);

        this.defaultState = {
            employeeName: '',
            employeeAddress: '',
            employeeEmployer: ''
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
        this.props.dispatch(addEmployee(this.state));
        this.setState(this.defaultState);
        event.preventDefault();
    }

    renderInput(id, title) {
        return (
            <div>
                <label htmlFor={id}>{title}<br/></label>
                <input id={id} value={ this.state[id] } onChange={ this.handleChange(id) } required={true}/>
            </div>
        )
    }

    render() {

        if (!this.props.companies || this.props.companies.length === 0){
            return "";
        }

        return (
            <Panel title="Add New Employee">
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('employeeName', 'Name')}
                    {this.renderInput('employeeAddress', 'Address')}
                    <div>
                        <select
                            id={'employeeEmployer'}
                            value={this.state['employeeEmployer']}
                            onChange={ this.handleChange('employeeEmployer') }
                            required={true}
                        >
                            <option value="">Select Employer</option>
                            {
                                this.props.companies.map((company)=>{
                                    return (<option value={company.id} key={company.id}>
                                        { company.companyName }
                                    </option>)
                                })
                            }
                        </select>
                    </div>
                    <button type="submit" value="save">Save</button>
                </form>
            </Panel>
        )
    }
}


function mapStateToProps (state) {
    return {
        companies: state.companies
    }
}

export default connect(mapStateToProps)(AddEmployee)