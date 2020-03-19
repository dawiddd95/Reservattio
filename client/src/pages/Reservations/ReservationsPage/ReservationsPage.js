import React from 'react';

import * as S from './StyledReservationsPage';

import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import ButtonsGroup from '../../../components/ButtonsGroup/ButtonsGroup';
import SearchReservationsForm from '../../../components/Reservations/SearchReservationsForm/SearchReservationsForm';
import ReservationsTable from '../../../components/Reservations/ReservationsTable/ReservationsTable';

const ReservationsPage = () => {
   return (  
      <S.Wrapper>
         <Breadcrumb 
            links={[
               {to: '/user/reservations', label: 'Home'}
            ]}
            text='Reservations'
         />
         <S.StyledCard title='Reservations' bordered>
            <ButtonsGroup 
               entity='reservations'
               showExportImport={true}
            />
            <S.StyledCard title='Search Reservations' margin_style='true'>
               <SearchReservationsForm />
            </S.StyledCard>
            <ReservationsTable />
         </S.StyledCard>
      </S.Wrapper>
   );
}
 
export default ReservationsPage;