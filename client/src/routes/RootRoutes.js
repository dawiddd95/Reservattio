import * as React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import ProtectAgainstLogout from '../components/ProtectAgainstLogout/ProtectAgainstLogout';
import ProtectAgainstLogin from '../components/ProtectAgainstLogin/ProtectAgainstLogin';
import AuthRoutes from './AuthRoutes';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import FetchAccountData from '../components/FetchAccountData/FetchAccountData';



const RootRoutes = () => {
   return (  
      <Switch>
         <Route exact path='/' render={() => <Redirect to='/auth/login' />} />
         <ProtectAgainstLogout path='/auth' component={AuthRoutes} />
         <ProtectAgainstLogin path="/user" component={FetchAccountData} />
         <Route component={ErrorPage} />
      </Switch>
   );
}
 
export default RootRoutes;