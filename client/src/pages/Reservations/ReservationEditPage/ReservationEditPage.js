import React from 'react';

import * as S from './StyledReservationEditPage';

import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import EditReservationForm from '../../../components/Reservations/EditReservationForm/EditReservationForm';


const ReservationEditPage = ({data}) => {
   return (  
      <S.Wrapper>
         <Breadcrumb 
            links={[
               {to: '/user/reservations', label: 'Home'},
               {to: '/user/reservations', label: 'Reservations'},
               {to: `/user/reservations/${data.id}`, label: `Reservation: ${data.id}`}
            ]}
            text='Edit Reservation'
         />
         <S.StyledCard title='Edit Reservation' bordered margin_style='true'>
            <EditReservationForm data={data} />
         </S.StyledCard>
      </S.Wrapper>
   );
}
 
export default ReservationEditPage;