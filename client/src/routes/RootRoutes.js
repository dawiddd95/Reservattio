import * as React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import ProtectAgainstLogout from '../components/ProtectAgainstLogout/ProtectAgainstLogout';
import ProtectAgainstLogin from '../components/ProtectAgainstLogin/ProtectAgainstLogin';
import FetchAccountData from '../components/FetchAccountData/FetchAccountData';
import AuthRoutes from './AuthRoutes';
import ErrorPage from '../pages/ErrorPage/ErrorPage';


const RootRoutes = () => {
   return (  
      <Router>
         <Switch>
            <Route exact path='/' render={() => <Redirect to='/auth/login' />} />
            <ProtectAgainstLogout path='/auth' component={AuthRoutes} />
            <ProtectAgainstLogin path="/user" component={FetchAccountData} />
            <Route component={ErrorPage} />
         </Switch>
      </Router>
   );
}
 
export default RootRoutes;