import React from 'react'
import { connect } from 'react-redux';
import formFields from './formField';
import * as actions from '../../actions';
import {withRouter} from 'react-router'
import  SurveyList  from './surveyList';
const SurveyFormReview = ({ onCancel,formValues,submitSurvey, history }) => {
    const reviewForm = formFields.map(({name,label})=>
                            <div key={name} className='text-light-app'>
                                <label className='text-darken-app'>{label}</label>
                                <div>{formValues[name]}</div>
                            </div> 
                        )
    return (
        <div>
            <SurveyList></SurveyList>
            {reviewForm}
            <button className='orange btn-flat left' onClick={onCancel}>Back</button>
            <button className='orange btn-flat right' onClick={()=>submitSurvey(formValues, history)}>
                Send
                <i className="large material-icons">email</i>
            </button>
        </div>
    )
}
function mapStateToProps(state){
    
    return {
        formValues:state.form.surveyForm.values
    };
}
export default connect(mapStateToProps,actions)(withRouter(SurveyFormReview))