import * as React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import ProtectAgainstLogout from '../components/ProtectAgainstLogout/ProtectAgainstLogout';
import AuthRoutes from './AuthRoutes';
import ErrorPage from '../pages/ErrorPage/ErrorPage';


const RootRoutes: React.SFC = () => {
   return (  
      <Router>
         <Switch>
            <Route exact path='/' render={() => <Redirect to='/auth/login' />} />
            <ProtectAgainstLogout path='/auth' component={AuthRoutes} />
            <Route component={ErrorPage} />
         </Switch>
      </Router>
   );
}
 
export default RootRoutes;