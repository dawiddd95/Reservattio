import React from 'react';

import {useFetchItem} from '../../../hooks/useFetchItem';

import LoadingPage from '../../../pages/LoadingPage/LoadingPage';
import ErrorPage from '../../../pages/ErrorPage/ErrorPage';
import ReservationDetailsPage from '../../../pages/Reservations/ReservationDetailsPage/ReservationDetailsPage';


const FetchReservation = ({match}) => {
   const [loading, error, data] = useFetchItem(`/api/user/reservations/${match.params.id}`, 'reservation')

   return (  
      <>
         {loading && <LoadingPage />}
         {error && <ErrorPage />}
         {data && <ReservationDetailsPage data={data} />}
      </>
   );
}
 
export default FetchReservation;