import * as React from 'react';
import {Switch, Route} from 'react-router-dom';

import ReservationsPage from '../pages/ReservationsPage/ReservationsPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

 
const ReservationsRoutes = () => {
   return (  
      <Switch>
         <Route exact path='/user/reservations' component={ReservationsPage} /> 
         <Route component={ErrorPage} />
      </Switch>
   )
}
 
export default ReservationsRoutes;