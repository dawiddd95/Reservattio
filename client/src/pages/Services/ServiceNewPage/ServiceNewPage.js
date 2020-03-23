import React from 'react';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';

import NewServiceForm from '../../../components/Services/NewServiceForm/NewServiceForm';

import * as S from './StyledServiceNewPage';


const ServiceNewPage = () => {
   return (  
      <S.Wrapper>
         <Breadcrumb 
            links={[
               {to: '/user/services', label: 'Home'},
               {to: '/user/services', label: 'Services'}
            ]}
            text='New Service'
         />
         <S.StyledCard title='New Service' bordered margin_style='true'>
            <NewServiceForm />
         </S.StyledCard>
      </S.Wrapper>
   );
}
 
export default ServiceNewPage;