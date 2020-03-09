import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ClientsPage from '../pages/ClientsPage/ClientsPage';
import ClientNewPage from '../pages/ClientNewPage/ClientNewPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const ClientsRoutes = () => {
   return (  
      <Switch>
         {/* <Route exact path='/user/employees' component={LoginPage} />  */}
         <Route exact path='/user/clients' component={ClientsPage} />
         <Route exact path='/user/clients/new' component={ClientNewPage} /> 
         <Route component={ErrorPage} />
      </Switch>
   );
}
 
export default ClientsRoutes;