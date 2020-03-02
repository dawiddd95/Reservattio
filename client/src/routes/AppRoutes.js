import * as React from 'react';
import {Switch, Route} from 'react-router-dom';


import ReservationsRoutes from './ReservationsRoutes';
import ErrorPage from '../pages/ErrorPage/ErrorPage';


const AppRoutes = () => {
   return (  
      <Switch>
         {/* <Route exact path='/user/employees' component={LoginPage} />  */}
         <Route path='/user/reservations' component={ReservationsRoutes} />
         <Route component={ErrorPage} />
      </Switch>
   )
}
 
export default AppRoutes;