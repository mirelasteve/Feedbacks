import React, {Component} from 'react';
import {reduxForm , Field} from 'redux-form';
import surveyField from './surveyField.jsx';
import {Link} from 'react-router-dom';
import validations from '../../utils/validations';
import formFields from './formField';

class SurveyForm extends Component { 
    constructor(props){
        super(props);
        this.state={}
    }
    renderFields(){
       return formFields.map(({label,name})=>{
           return <Field className='text-light-app' key={name} component={surveyField} type='text' label={label} name={name}></Field>
       }
    )
    }
    render(){
        return(<div className='mt-5'>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
            {this.renderFields()}
           <Link className='btn-flat left red' to='/surveys'>Cancel</Link>
            <button className='green btn-flat right white-text' type='submit'>
                Next
                <i className='material-icons right'>done</i>
            </button>
        </form>
            
        </div>)	} 
 } 
 function validate(values){
     const errors={};
     errors.recipients = validations(values.recipients || '') 

     if(!values.title){
         errors.title = 'You must provide a title';
     }
     if(!values.subject){
        errors.subject ='You must provide a subject';
    }
    if(!values.body){
        errors.body = 'You must provide an email body';
    }
    if(!values.recipients){
        errors.recipients = 'Invalid email';
    }
    
     return errors;
 }
 export default reduxForm({
     validate,
    form:'surveyForm',
    destroyOnUnmount:false
 })(SurveyForm);