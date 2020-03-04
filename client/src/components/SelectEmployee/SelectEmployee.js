import React from 'react';
import { Select } from 'formik-antd';

import * as S from './StyledSelectEmployee';

const { Option, OptGroup } = Select;

const fakeManager = [
   {id: 16244, name: 'Dawid', surname: 'Łychoński', type: 'Manager'},
]

const fakeEmployees = [
   {id: 62735, name: 'Natalia', surname: 'Stąpor', type: 'Employee'},
   {id: 1345232234, name: 'Justyna', surname: 'Jabłońska', type: 'Employee'}
]

const useHook = () => {

}

const SelectEmployee = () => {
   return (  
      <S.FieldWrapper>
         <S.Label>
            Employee:
         </S.Label>
         <Select name='employee'>
            <OptGroup label="Manager">
               {fakeManager.map(manager => 
                  <Option value={manager.id} key={manager.id}>
                     {manager.name} {manager.surname} [{manager.type}]
                  </Option>
               )}
            </OptGroup>
            <OptGroup label="Employees">
               {fakeEmployees.map(employee =>
                  <Option value={employee.id} key={employee.id}>
                     {employee.name} {employee.surname} [{employee.type}]
                  </Option>
               )}     
            </OptGroup>
         </Select>
         <S.StyledErrorMessage 
            name='employee' 
            component='p' 
         />
      </S.FieldWrapper>
   );
}
 
export default SelectEmployee;