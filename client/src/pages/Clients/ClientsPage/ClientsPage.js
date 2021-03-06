import React from 'react';

import * as S from './StyledClientsPage';

import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import ButtonsGroup from '../../../components/ButtonsGroup/ButtonsGroup';
import SearchClientsForm from '../../../components/Clients/SearchClientsForm/SearchClientsForm';
import ClientsTable from '../../../components/Clients/ClientsTable/ClientsTable';


const ClientsPage = () => {
   return (  
      <S.Wrapper>
         <Breadcrumb 
            links={[
               {to: '/user/clients', label: 'Home'}
            ]}
            text='Clients'
         />
         <S.StyledCard title='Clients' bordered>
            <ButtonsGroup 
               entity='clients'
               showImport={true}
               showExport={true}
            />
            <S.StyledCard title='Search Clients' margin_style='true'>
               <SearchClientsForm />
            </S.StyledCard>
            <ClientsTable />
         </S.StyledCard>
      </S.Wrapper>
   );
}
 
export default ClientsPage;