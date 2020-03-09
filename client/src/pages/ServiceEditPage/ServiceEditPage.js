import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

import EditServiceForm from '../../components/EditServiceForm/EditServiceForm';

import * as S from './StyledServiceEditPage';


const ServiceEditPage = ({data}) => {
   return (  
      <S.Wrapper>
         <Breadcrumb 
            links={[
               {to: '/user/services', label: 'Home'},
               {to: '/user/services', label: 'Services'},
               {to: `/user/services/${data.id}`, label: `Service: ${data.id}`}
            ]}
            text='Edit Service'
         />
         <S.StyledCard title='Edit Service' bordered margin_style='true'>
            <EditServiceForm data={data} />
         </S.StyledCard>
      </S.Wrapper>
   );
}
 
export default ServiceEditPage;