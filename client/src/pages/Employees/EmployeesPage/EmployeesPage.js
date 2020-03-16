import React from 'react';

import * as S from './StyledEmployeesPage';

import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import ButtonsGroup from '../../../components/ButtonsGroup/ButtonsGroup';
// import SearchServicesForm from '../../components/SearchServicesForm/SearchServicesForm';
// import ServicesTable from '../../components/ServicesTable/ServicesTable';



const EmployeesPage = () => {
   return (  
      <S.Wrapper>
         <Breadcrumb 
            links={[
               {to: '/user/employees', label: 'Home'}
            ]}
            text='Employees'
         />
         <S.StyledCard title='Employees' bordered>
            <ButtonsGroup 
               entity='employees'
               showExportImport={false}
            />
            <S.StyledCard title='Search Employees'>
               {/* <SearchServicesForm /> */}
            </S.StyledCard>
            {/* <ServicesTable /> */}
         </S.StyledCard>
      </S.Wrapper>
   );
}
 
export default EmployeesPage;