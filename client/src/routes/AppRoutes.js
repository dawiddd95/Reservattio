import * as React from 'react';
import {Switch, Route} from 'react-router-dom';

import ReservationsRoutes from './ReservationsRoutes';
import ClientsRoutes from './ClientsRoutes';
import ServicesRoutes from './ServicesRoutes';
import ErrorPage from '../pages/ErrorPage/ErrorPage';


const AppRoutes = () => {
   return (  
      <Switch>
         <Route path='/user/reservations' component={ReservationsRoutes} />
         <Route path='/user/clients' component={ClientsRoutes} />
         <Route path='/user/services' component={ServicesRoutes} />
         <Route component={ErrorPage} />
      </Switch>
   )
}
 
export default AppRoutes;