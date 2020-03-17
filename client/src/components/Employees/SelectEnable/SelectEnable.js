import React from 'react';
import { Select } from 'formik-antd';

import * as S from './StyledSelectEnable';

const { Option } = Select;

const SelectEnable = () => {
   return (  
      <S.FieldWrapper>
         <S.Label>
            Enable:
         </S.Label>
         <Select name='enable' defaultValue="all" >
            <Option value='all'>All</Option>
            <Option value='yes'>Only Yes</Option>
            <Option value='no'>Only No</Option>
         </Select>
      </S.FieldWrapper> 
   );
}
 
export default SelectEnable;