import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ClientsPage from '../pages/ClientsPage/ClientsPage';
import ClientNewPage from '../pages/ClientNewPage/ClientNewPage';
import ImportClientsPage from '../pages/ImportClientsPage/ImportClientsPage';
import FetchClient from '../components/FetchClient/FetchClient';
import FetchClientToEdit from '../components/FetchClientToEdit/FetchClientToEdit';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const ClientsRoutes = () => {
   return (  
      <Switch>
         <Route exact path='/user/clients' component={ClientsPage} />
         <Route exact path='/user/clients/new' component={ClientNewPage} /> 
         <Route exact path='/user/clients/import' component={ImportClientsPage} />
         {/* Może reużyć te dwa dodając propsa isEdit  */}
         <Route exact path='/user/clients/:id' component={FetchClient} />
         <Route exact path='/user/clients/:id/edit' component={FetchClientToEdit} />
         <Route component={ErrorPage} />
      </Switch>
   );
}
 
export default ClientsRoutes;