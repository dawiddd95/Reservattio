import * as React from 'react';
import {Switch, Route} from 'react-router-dom';


import ReservationsPage from '../pages/Reservations/ReservationsPage/ReservationsPage';
import ReservationNewPage from '../pages/Reservations/ReservationNewPage/ReservationNewPage';
import FetchReservation from '../components/Reservations/FetchReservation/FetchReservation';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const ReservationsRoutes = () => {
   return (  
      <Switch>
         <Route exact path='/user/reservations' component={ReservationsPage} /> 
         <Route exact path='/user/reservations/new' component={ReservationNewPage} /> 
         <Route exact path='/user/reservations/:id' component={FetchReservation} />
         <Route component={ErrorPage} />
      </Switch>
   )
}
 
export default ReservationsRoutes;