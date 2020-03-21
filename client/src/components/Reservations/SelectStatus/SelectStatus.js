import React from 'react';
import { Select } from 'formik-antd';

import * as S from './StyledSelectStatus';

const { Option } = Select;

const SelectStatus = ({name}) => {
   return (  
      <S.FieldWrapper>
         <S.Label>
            Status:
         </S.Label>
         <Select name={name} allowClear={true}>
            <Option value='Reserved'>Reserved</Option>
            <Option value='In Progress'>In Progress</Option>
            <Option value='Cancelled'>Cancelled</Option>
            <Option value='Completed'>Completed</Option>
         </Select>
         <S.StyledErrorMessage 
            name={name} 
            component='p' 
         />
      </S.FieldWrapper> 
   );
}
 
export default SelectStatus;