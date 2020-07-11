import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './payments';
import coffeeTellerLogo from '../../LogoCoffeeTeller3.png';

class Header extends Component { 
    constructor(props){
        super(props);
        this.state={}
    }
    renderContent(){
        
        switch(this.props.auth){
            case null :return  <li>Loading ... </li>
            case false:return (<li><a href='/auth/google'>Log in with Google</a></li>)
            default: return [
                                <li className='text-light-app' key ='payments'><Payments/></li> ,
                                <li className='text-light-app' key ='surveys'><Link to='/surveys'> Surveys</Link></li>,
                                <li className='text-light-app' key ='credits'>Credits: {this.props.auth.credits}</li>,
                                <li className='text-light-app' key ='logout'><a href='/api/logout'>Log out</a></li>,
                	        ]
        }
    }
    
    render(){
        return(
            <nav className='transparent no-shadows' >
            <div className='nav-wrapper '>
            {/* <Link to={this.props.auth ? '/surveys':'/'}>
                <img src={coffeeTellerLogo} alt='logo'/>
            </Link> */}
                <ul className="right section text-light-app">
                    {this.renderContent()}
                </ul>
            </div>
        </nav>
        )	} 
 } 
function mapStateToProps(auth){
    return auth
    
}
 export default connect(mapStateToProps)(Header);


