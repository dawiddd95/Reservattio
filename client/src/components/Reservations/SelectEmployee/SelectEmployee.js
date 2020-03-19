import React from 'react';
import { Select } from 'formik-antd';
import { useSelector } from 'react-redux';

import * as S from './StyledSelectEmployee';

const { Option, OptGroup } = Select;


const SelectEmployee = () => {
   const { manager } = useSelector(state => state.managerReducer)
   const { employees } = useSelector(state => state.employeesReducer)

   return (  
      <S.FieldWrapper>
         <S.Label>
            Employee:
         </S.Label>
         <Select 
            name='employeeId'
            placeholder='You can also input letters to search employee'
            optionFilterProp='children'
            showSearch
            filterOption={true}
         >
            <OptGroup label="Manager">
               {manager.map(manager => 
                  <Option value={manager.id} key={manager.id}>
                     {manager.name} {manager.surname}
                  </Option>
               )}
            </OptGroup>
            <OptGroup label="Employees">
               {employees.map(employee =>
                  <Option value={employee.id} key={employee.id}>
                     {employee.name} {employee.surname}
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