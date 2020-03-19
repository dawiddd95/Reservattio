import React from 'react';
import { Select } from 'formik-antd';

import * as S from './StyledSelectStatus';

const { Option } = Select;

const SelectStatus = () => {
   return (  
      <S.FieldWrapper>
         <S.Label>
            Status:
         </S.Label>
         <Select name='status'>
            <Option value='Reserved'>Reserved</Option>
            <Option value='In Progress'>In Progress</Option>
            <Option value='Cancelled'>Cancelled</Option>
            <Option value='Completed'>Completed</Option>
         </Select>
         <S.StyledErrorMessage 
            name='status' 
            component='p' 
         />
      </S.FieldWrapper> 
   );
}
 
export default SelectStatus;