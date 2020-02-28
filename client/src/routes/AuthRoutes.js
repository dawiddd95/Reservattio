import * as React from 'react';
import {Switch, Route} from 'react-router-dom';

import LoginPage from '../pages/LoginPage/LoginPage';
import SignupPage from '../pages/SignupPage/SignupPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage/ForgotPasswordPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

 
const AuthRoutes = () => {
   return (  
      <Switch>
         <Route exact path='/auth/login' component={LoginPage} /> 
         <Route exact path='/auth/signup' component={SignupPage} /> 
         <Route exact path='/auth/forgot-password' component={ForgotPasswordPage} />
         <Route component={ErrorPage} />
      </Switch>
   )
}
 
export default AuthRoutes;