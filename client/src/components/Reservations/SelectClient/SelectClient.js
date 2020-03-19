import React from 'react';
import { Select } from 'formik-antd';
import { useSelector } from 'react-redux';

import * as S from './StyledSelectClient';

const { Option } = Select;


const SelectClient = () => {
   const {clients} = useSelector(state => state.clientsReducer)

   return (  
      <S.FieldWrapper>
         <S.Label>
            Client:
         </S.Label>
         <Select 
            name='clientId' 
            placeholder='You can also input letters to search client'
            optionFilterProp='children'
            showSearch
            filterOption={true}
         >
            {clients.map(client =>
               <Option value={client.id} key={client.id}>
                  {client.name} {client.surname} [{client.phone}]
               </Option>
            )}     
         </Select>
         <S.StyledErrorMessage 
            name='client' 
            component='p' 
         />
      </S.FieldWrapper>
   );
}
 
export default SelectClient;