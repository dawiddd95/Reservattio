import React from 'react';

import * as S from './StyledServicesPage';

import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import ButtonsGroup from '../../../components/ButtonsGroup/ButtonsGroup';
import SearchServicesForm from '../../../components/Services/SearchServicesForm/SearchServicesForm';
import ServicesTable from '../../../components/Services/ServicesTable/ServicesTable';



const ServicesPage = () => {
   return (  
      <S.Wrapper>
         <Breadcrumb 
            links={[
               {to: '/user/services', label: 'Home'}
            ]}
            text='Services'
         />
         <S.StyledCard title='Services' bordered>
            <ButtonsGroup 
               entity='services'
               showExportImport={false}
            />
            <S.StyledCard title='Search Services'>
               <SearchServicesForm />
            </S.StyledCard>
            <ServicesTable />
         </S.StyledCard>
      </S.Wrapper>
   );
}
 
export default ServicesPage;