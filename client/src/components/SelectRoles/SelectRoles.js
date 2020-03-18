import React from 'react';
import {Select} from 'formik-antd';

import {reservations, employees, services, profile, audit, clients} from '../../assets/data/selectRoles';
import * as S from './StyledSelectRoles';

const {Option, OptGroup} = Select;


const useSelect = (initialRoles) => {
   const [selectedItems, setSelectedItems] = React.useState([]);

   const handleChange = selectedItems => {
      setSelectedItems(selectedItems)
   };

   React.useEffect(() => {
      const fetchRoles = () => {
         setSelectedItems(initialRoles)
      }
      fetchRoles()
   }, [])
   
   
   return [selectedItems, handleChange]
}



const SelectRoles = ({name, initialRoles}) => {
   const [selectedItems, handleChange] = useSelect(initialRoles);

   return (  
      <S.FieldWrapper>
         <S.Label>
            Roles:
         </S.Label>
         <Select
            name={name}
            mode='multiple'
            placeholder='Roles list'
            value={selectedItems}
            onChange={handleChange}
         >
            <OptGroup label='Reservations'>
               {reservations.map(item => (
                  <Option key={item.value} value={item.value}>
                     {item.label}
                  </Option>
               ))}
            </OptGroup>
            <OptGroup label='Employees'>
               {employees.map(item => (
                  <Option key={item.value} value={item.value}>
                     {item.label}
                  </Option>
               ))}
            </OptGroup>
            <OptGroup label='Services'>
               {services.map(item => (
                  <Option key={item.value} value={item.value}>
                     {item.label}
                  </Option>
               ))}
            </OptGroup>
            <OptGroup label='Clients'>
               {clients.map(item => (
                  <Option key={item.value} value={item.value}>
                     {item.label}
                  </Option>
               ))}
            </OptGroup>
            <OptGroup label='Profile'>
               {profile.map(item => (
                  <Option key={item.value} value={item.value}>
                     {item.label}
                  </Option>
               ))}
            </OptGroup>
            <OptGroup label='Audit'>
               {audit.map(item => (
                  <Option key={item.value} value={item.value}>
                     {item.label}
                  </Option>
               ))}
            </OptGroup>
         </Select>
         <S.StyledErrorMessage 
            name={name} 
            component='p' 
         />
      </S.FieldWrapper>
   );
}
 
export default SelectRoles;