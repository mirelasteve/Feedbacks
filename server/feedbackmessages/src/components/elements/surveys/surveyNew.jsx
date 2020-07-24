import React, {Component} from 'react';
import SurveyForm from './surveyForm';
import  SurveyFormReview  from './surveyFormReview.jsx';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';


class SurveyNew extends Component { 
    constructor(props){
        super(props);
        this.state={
            showSurveyFormReview: false,
            showLoader:false,
            auth:props.auth
        }
    }
    
    renderContent(){
      
        if(this.state.showSurveyFormReview){
            return <SurveyFormReview 
                    showLoader={this.state.showLoader} 
                    onCancel={()=>this.setState({showSurveyFormReview:false})}
                    ></SurveyFormReview>
        }
        return <SurveyForm 
                    onSurveySubmit={()=>
                    this.setState({
                        showSurveyFormReview:true,
                        showLoader:true
                    })} userEmails={this.props.auth?this.props.auth.userEmails:[]}>
                </SurveyForm>
    }
    render(){
        
        return(
            this.props.auth ?
            <div className='mt-5'>
                {this.renderContent()}
            </div>
            :<div></div>
        )	} 
 } 

 function mapStateToProps(state){
    return {
        auth:state.auth
    }
}
//  export default reduxForm({
  
//    form:'surveyForm'

// })(SurveyNew);
export default connect(mapStateToProps,actions)(reduxForm({
  
    form:'surveyForm'
 
 })(SurveyNew));