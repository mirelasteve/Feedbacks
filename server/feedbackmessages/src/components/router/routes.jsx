import { Route, Switch} from 'react-router-dom';
 import React from 'react'
import { Landing } from '../elements/landing';
import { SurveyList  } from '../elements/surveyList';
 
 export const Routes = () => {
     return (
       
             <Switch>
                <Route exact path='/' component= {Landing}></Route>
                <Route path='/surveys' component= {SurveyList}></Route>
             </Switch>
        
     )
 }
 

 