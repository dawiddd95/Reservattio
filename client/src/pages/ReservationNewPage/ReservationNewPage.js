import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

import * as S from './StyledReservationNewPage';

import NewReservationForm from '../../components/NewReservationForm/NewReservationForm';

const ReservationNewPage = () => {
   return (  
      <S.Wrapper>
         <Breadcrumb 
            links={[
               {to: '/user/reservations', label: 'Home'},
               {to: '/user/reservations', label: 'Reservations'}
            ]}
            text='New Reservation'
         />
         <S.StyledCard title='New Reservation' bordered margin_style='true'>
            <NewReservationForm />
         </S.StyledCard>
      </S.Wrapper>
   );
}
 
export default ReservationNewPage;