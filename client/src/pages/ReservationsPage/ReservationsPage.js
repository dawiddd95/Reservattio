import React from 'react';

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ButtonsGroup from '../../components/ButtonsGroup/ButtonsGroup';
import SearchReservationsForm from '../../components/SearchReservationsForm/SearchReservationsForm';

import * as S from './StyledReservationsPage';

const ReservationsPage = () => {
   return (  
      <S.Wrapper>
         <Breadcrumb 
            links={[
               {to: '/user/reservations', label: 'Home'}
            ]}
            text='Reservations'
         />
         <S.StyledCard title="Reservations" bordered>
            <ButtonsGroup 
               entity='reservations'
            />
            <S.StyledCard>
               <SearchReservationsForm />
            </S.StyledCard>
         </S.StyledCard>
      </S.Wrapper>
   );
}
 
export default ReservationsPage;