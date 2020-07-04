import 'materialize-css/dist/css/materialize.min.css';
import React,{Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Routes } from './router/routes';
import  Header  from './elements/header.jsx';
import {connect} from 'react-redux';
import * as actions from './actions/index';

class App extends Component { 
    constructor(props){
        super(props);
        this.state={}
    }
    componentDidMount(){
        this.props.fetchUser();
    }

    render(){
        return(
           
                <div className='container'>
                <BrowserRouter>
                    <Header></Header>
                    <Routes></Routes>
                </BrowserRouter>
                    
                </div>
            
                
        )	} 
 } 

 export default connect(null,actions)(App);