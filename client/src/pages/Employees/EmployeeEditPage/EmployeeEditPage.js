import React from 'react';

import * as S from './StyledEmployeeEditPage';

import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import EditEmployeeForm from '../../../components/Employees/EditEmployeeForm/EditEmployeeForm';


const EmployeeEditPage = ({data}) => {
   return (  
      <S.Wrapper>
         <Breadcrumb 
            links={[
               {to: '/user/employees', label: 'Home'},
               {to: '/user/employees', label: 'Employees'},
               {to: `/user/employees/${data.id}`, label: `Employee: ${data.id}`}
            ]}
            text='Edit Employee'
         />
         <S.StyledCard title='Edit Employee' bordered margin_style='true'>
            <EditEmployeeForm data={data} />
         </S.StyledCard>
      </S.Wrapper>
   );
}
 
export default EmployeeEditPage;