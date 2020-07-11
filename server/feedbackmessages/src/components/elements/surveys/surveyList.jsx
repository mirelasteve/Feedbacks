import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

class SurveyList  extends Component { 
    state = {
        b:[1,2,3,4,5]
    }
    componentDidMount(){
        this.props.fetchSurveys()
    }
    
    render() {
        
        
        return (
            <div className='row mt-5'>
                
                
                {this.props.surveys.map((survey,index)=>
                <div className=''>
                <div className='col xs12 m6'>
                    <div className='card ' key = {index}>
                    <div className='card-content'>
                    <div>
                        <span className='card-title'>
                        {new Date(survey.dateSent).toLocaleDateString()}
                        <button className='btn-small right red'>X</button>
                        
                        </span>
                        
                    </div>
                    

                        <p>
                            <div>
                                <span className='bold col xs12 m5' >Campaign name</span>
                                <span className='subject col xs12 m7'> {survey.title}</span>
                            </div>
                            <div>
                                <span className='bold col xs12 m5' >Subject</span>
                                <span className='subject col xs12 m7'> {survey.subject}</span>
                            </div>
                            <div>
                                <span className='bold col xs12 m5'>Content</span> 
                                <span className='subject col xs12 m7'>{survey.body}</span>
                            </div>
                            <div>
                                <span className='bold col xs12 m4 red-text'>Yes {survey.yes}</span>
                            </div>
                            <div className='row'>
                                <span className='bold col xs12 red-text'>No {survey.no}</span>
                            </div>
                          
                       
                        </p>
                        <div className='card-action'>
                            <button className='btn-floating wave left yellow'><i className='material-icons'>edit</i></button>
                            <button className='btn-floating pulse right green'><i className='material-icons'>send</i></button>
                        </div>

                    </div>
                    </div>
                </div>
                </div>
                )}
                
                
                <div className="fixed-action-btn">
                    <Link to='/surveys/new' className="btn-floating btn-large red">
                        <i className="large material-icons red">add</i>
                    </Link>
                </div>
            </div>
        )
    }
    
}

function mapStateToProps(state){
    return{
        surveys:state.surveys
    }
}
export default connect(mapStateToProps,actions)(SurveyList);