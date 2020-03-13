import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

import * as S from './StyledClientEditPage';

import EditClientForm from '../../components/EditClientForm/EditClientForm';


const ClientEditPage = ({data}) => {
   return (  
      <S.Wrapper>
         <Breadcrumb 
            links={[
               {to: '/user/clients', label: 'Home'},
               {to: '/user/clients', label: 'Clients'},
               {to: `/user/clients/${data.id}`, label: `Client: ${data.id}`}
            ]}
            text='Edit Client'
         />
         <S.StyledCard title='Edit Client' bordered margin_style='true'>
            <EditClientForm data={data} />
         </S.StyledCard>
      </S.Wrapper>
   );
}
 
export default ClientEditPage;