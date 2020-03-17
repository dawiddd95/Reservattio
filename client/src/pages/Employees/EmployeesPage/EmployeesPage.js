import React from 'react';

import * as S from './StyledEmployeesPage';

import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import ButtonsGroup from '../../../components/ButtonsGroup/ButtonsGroup';
import EmployeesTable from '../../../components/Employees/EmployeesTable/EmployeesTable';
import SearchEmployeesForm from '../../../components/Employees/SearchEmployeesForm/SearchEmployeesForm';


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
               <SearchEmployeesForm />
            </S.StyledCard>
            <EmployeesTable />
         </S.StyledCard>
      </S.Wrapper>
   );
}
 
export default EmployeesPage;