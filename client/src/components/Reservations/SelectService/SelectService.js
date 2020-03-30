import React from 'react';
import { Select } from 'formik-antd';
import { useSelector } from 'react-redux';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import * as S from './StyledSelectService';

const { Option } = Select;


const SelectService = ({name}) => {
   const { services } = useSelector(state => state.servicesReducer);

   return (  
      <S.FieldWrapper>
         <S.Label>
            Service:
            <Button type='link'>
               <Link to='/user/services/new'>{services.length === 0 && 'Click here to add first service'}</Link>
            </Button>
         </S.Label>
         <Select 
            name={name}
            placeholder='You can also input letters to search service'
            optionFilterProp='children'
            showSearch
            filterOption={true}
            allowClear={true}
         >
            {services.map(service =>
               <Option value={service.id} key={service.id}>
                  {service.name}
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
 
export default SelectService;