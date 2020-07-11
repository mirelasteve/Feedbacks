import React, {Component} from 'react';
import SurveyForm from './surveyForm';
import  SurveyFormReview  from './surveyFormReview.jsx';
import {reduxForm} from 'redux-form';

class SurveyNew extends Component { 
    state = {
        showSurveyFormReview: false
    }

    renderContent(){
        if(this.state.showSurveyFormReview){
            return <SurveyFormReview onCancel={()=>this.setState({showSurveyFormReview:false})}></SurveyFormReview>
        }
        return <SurveyForm onSurveySubmit={()=>this.setState({
            showSurveyFormReview:true
        })}></SurveyForm>
    }
    render(){
        return(
            <div className='mt-5'>
                {this.renderContent()}
            </div>
        )	} 
 } 
 export default reduxForm({
  
   form:'surveyForm'

})(SurveyNew);
