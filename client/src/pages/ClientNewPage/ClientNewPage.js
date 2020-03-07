import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import NewClientForm from '../../components/NewClientForm/NewClientForm';

import * as S from './StyledClientNewPage';

const ClientNewPage = () => {
   return (  
      <S.Wrapper>
         <Breadcrumb 
            links={[
               {to: '/user/clients', label: 'Home'},
               {to: '/user/clients', label: 'Clients'}
            ]}
            text='New Client'
         />
         <S.StyledCard title='New Client' bordered margin_style='true'>
            <NewClientForm />
         </S.StyledCard>
      </S.Wrapper>
   );
}
 
export default ClientNewPage;