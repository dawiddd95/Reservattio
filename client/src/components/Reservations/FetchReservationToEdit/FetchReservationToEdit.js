import React from 'react';

import {useFetchItem} from '../../../hooks/useFetchItem';

import LoadingPage from '../../../pages/LoadingPage/LoadingPage';
import ErrorPage from '../../../pages/ErrorPage/ErrorPage';
import ReservationEditPage from '../../../pages/Reservations/ReservationEditPage/ReservationEditPage';

const FetchReservationToEdit = ({match}) => {
   const [loading, error, data] = useFetchItem(`/api/user/reservations/${match.params.id}`, 'reservation')
   
   return (  
      <>
         {loading && <LoadingPage />}
         {error && <ErrorPage />}
         {data && <ReservationEditPage data={data} />}
      </>
   );
}
 
export default FetchReservationToEdit;