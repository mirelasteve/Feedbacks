import React from 'react'
import { connect } from 'react-redux';
import formFields from './formField';
import * as actions from '../../actions';
import {withRouter} from 'react-router';
import  SurveyList  from './surveyList';
const SurveyFormReview = ({ onCancel,formValues,submitSurvey,userEmails, history }) => {
    // console.log(userEmails);
    
    
    const reviewForm = <div  className='text-light-app'>
                            <h5>{formValues.title}</h5>
                            <h6>{formValues.subject}</h6>
                            <h6>{formValues.body}</h6>
                            <div>
                                        <a className='text-light-app'>Yes</a>
                                    </div>
                                    <div>
                                        <a className='text-light-app'>No</a>
                                    </div>
                        </div>
                      
    return (
        <div className='row'>
            <h>This is how your customers will see the survey in their mail</h>
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