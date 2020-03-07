import React from 'react';
import { Select } from 'formik-antd';

import * as S from './StyledSelectClient';

const { Option } = Select;

const fakeClients = [
   {id: 1212132, name: 'Katarzyna', surname: 'Małek', phone: '735 675 123'},
   {id: 653, name: 'Kamil', surname: 'Miller', phone: '727 152 763'},
   {id: 63, name: 'Roksana', surname: 'Mielc', phone: '947 363 937'}
]


const useSelect = () => {

}

const SelectClient = () => {
   return (  
      <S.FieldWrapper>
         <S.Label>
            Client:
         </S.Label>
         <Select name='clientId'>
            {fakeClients.map(client =>
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