import React from 'react';

import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import NewEmployeeForm from '../../../components/Employees/NewEmployeeForm/NewEmployeeForm';

import * as S from './StyledEmployeeNewPage';


const EmployeeNewPage = () => {
   return (  
      <S.Wrapper>
         <Breadcrumb 
            links={[
               {to: '/user/employees', label: 'Home'},
               {to: '/user/employees', label: 'Employees'}
            ]}
            text='New Employee'
         />
         <S.StyledCard title='New Employee' bordered margin_style='true'>
            <NewEmployeeForm />
         </S.StyledCard>
      </S.Wrapper>
   );
}
 
export default EmployeeNewPage;