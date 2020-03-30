import React from 'react';
import { Select } from 'formik-antd';
import { useSelector } from 'react-redux';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import * as S from './StyledSelectClient';

const { Option } = Select;


const SelectClient = ({name}) => {
   const {clients} = useSelector(state => state.clientsReducer)

   return (  
      <S.FieldWrapper>
         <S.Label>
            Client:
            {clients.length === 0 &&
               <Button type='link'>
                  <Link to='/user/clients/new'>Click here to add first client</Link>
               </Button>
            }
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
                  {client.name} {client.surname} &lt;{client.phone}&gt;
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