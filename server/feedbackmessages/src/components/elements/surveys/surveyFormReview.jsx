import React from 'react'
import { connect } from 'react-redux';
import formFields from './formField';
import * as actions from '../../actions';
import {withRouter} from 'react-router';
import  SurveyList  from './surveyList';
const SurveyFormReview = ({ onCancel,formValues,submitSurvey,userEmails, history }) => {
    // console.log(userEmails);
    
    
    const reviewForm = formFields.map(({name,label})=>
                            <div key={name} className='  '>
                                <label className='text-light-app fontSize-1rem'>{label}</label>
                                <div className='bg-light-app text-black input-field fontSize-1rem'>{formValues[name]}</div>
                            </div> 
                        )
    return (
        <div className='row'>
            {/* <SurveyList></SurveyList> */}
            <div className='col m8'>
                {reviewForm}
            </div>
            <div className='col m12'>
                <button className='orange btn-flat left' onClick={onCancel}>Back</button>
                <button className='green accent-4 btn-flat right' onClick={()=>submitSurvey(formValues, history)}>
                    Send
                    <i className="large material-icons">email</i>
                </button>
            </div>
            
        </div>
    )
}
function mapStateToProps(state){

    
    return {
        formValues:state.form.surveyForm.values
        
    };
}
export default connect(mapStateToProps,actions)(withRouter(SurveyFormReview))