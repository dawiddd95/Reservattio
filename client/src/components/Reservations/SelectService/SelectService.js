import React from 'react';
import { Select } from 'formik-antd';
import { useSelector } from 'react-redux';

import * as S from './StyledSelectService';

const { Option } = Select;


const SelectService = () => {
   const { services } = useSelector(state => state.servicesReducer);

   return (  
      <S.FieldWrapper>
         <S.Label>
            Service:
         </S.Label>
         <Select 
            name='serviceId'
            placeholder='You can also input letters to search service'
            optionFilterProp='children'
            showSearch
            filterOption={true}
         >
            {services.map(service =>
               <Option value={service.id} key={service.id}>
                  {service.name}
               </Option>
            )}     
         </Select>
         <S.StyledErrorMessage 
            name='service' 
            component='p' 
         />
      </S.FieldWrapper>
   );
}
 
export default SelectService;