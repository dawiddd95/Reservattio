import * as React from 'react';
import {Switch, Route} from 'react-router-dom';

import LoginPage from '../pages/LoginPage/LoginPage';
import SignupPage from '../pages/SignupPage/SignupPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

 
const AuthRoutes: React.SFC = () => {
   return (  
      <Switch>
         <Route exact path='/auth/login' component={LoginPage} /> 
         <Route exact path='/auth/signup' component={SignupPage} /> 
         <Route component={ErrorPage} />
      </Switch>
   )
}
 
export default AuthRoutes;