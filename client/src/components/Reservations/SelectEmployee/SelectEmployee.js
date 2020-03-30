import React from 'react';
import { Select } from 'formik-antd';
import { useSelector } from 'react-redux';
import { Button } from 'antd';
import { Link } from 'react-router-dom';


import * as S from './StyledSelectEmployee';

const { Option } = Select;


const SelectEmployee = ({name}) => {
   const { employees } = useSelector(state => state.employeesReducer)

   return (  
      <S.FieldWrapper>
         <S.Label>
            Employee:
            {employees.length === 0 &&
               <Button type='link'>
                  <Link to='/user/employees/new'>Click here to add first employee</Link>
               </Button>
            }
         </S.Label>
         <Select 
            name={name}
            placeholder='You can also input letters to search employee'
            optionFilterProp='children'
            showSearch
            filterOption={true}
            allowClear={true}
         >
            {employees.map(employee =>
               <Option value={employee.id} key={employee.id}>
                  {employee.name} {employee.surname}
               </Option>
            )}     
         </Select>
         <S.StyledErrorMessage 
            name={name}
            component='p' 
         />
      </S.FieldWrapper>
   );
}
 
export default SelectEmployee;