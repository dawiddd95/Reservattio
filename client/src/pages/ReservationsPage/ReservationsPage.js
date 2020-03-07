import React from 'react';

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ButtonsGroup from '../../components/ButtonsGroup/ButtonsGroup';
import SearchReservationsForm from '../../components/SearchReservationsForm/SearchReservationsForm';
import ReservationsTable from '../../components/ReservationsTable/ReservationsTable';

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