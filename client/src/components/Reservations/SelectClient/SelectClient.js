import React from 'react';
import { Select } from 'formik-antd';
import { useSelector } from 'react-redux';

import * as S from './StyledSelectClient';

const { Option } = Select;


const SelectClient = ({name}) => {
   const {clients} = useSelector(state => state.clientsReducer)

   return (  
      <S.FieldWrapper>
         <S.Label>
            Client:
         </S.Label>
         <Select 
            name={name}
            placeholder='You can also input letters to search client'
            optionFilterProp='children'
            showSearch
            filterOption={true}
            allowClear={true}
         >
            {clients.map(client =>
               <Option value={client.id} key={client.id}>
                  {client.name} {client.surname} [{client.phone}]
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
 
export default SelectClient;