import React from 'react';
import { Select } from 'formik-antd';

import * as S from './StyledSelectService';

const { Option } = Select;



const fakeServices = [
   {id: 257, name: 'Diagnoza'},
   {id: 2354, name: 'Fizjoterapia'},
   {id: 234, name: 'Masaż'}
]


const SelectService = () => {
   return (  
      <S.FieldWrapper>
         <S.Label>
            Service:
         </S.Label>
         <Select name='serviceId'>
            {fakeServices.map(service =>
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