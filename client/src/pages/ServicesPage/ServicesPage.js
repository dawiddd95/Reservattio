import React from 'react';

import * as S from './StyledServicesPage';

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ButtonsGroup from '../../components/ButtonsGroup/ButtonsGroup';
import SearchServicesForm from '../../components/SearchServicesForm/SearchServicesForm';



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
            <S.StyledCard title='Search Services' margin_style='true'>
               <SearchServicesForm />
            </S.StyledCard>
            
         </S.StyledCard>
      </S.Wrapper>
   );
}
 
export default ServicesPage;