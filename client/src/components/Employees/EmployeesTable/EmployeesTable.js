import React from 'react';
import {Button, Table, Popconfirm, Alert} from 'antd';
import { UndoOutlined, DeleteOutlined } from '@ant-design/icons';
import {useSelector} from 'react-redux';

import * as S from './StyledEmployeesTable';
//import {useServicesTable} from '../../hooks/useServicesTable';

import {employeesTableColumns} from '../../../assets/data/employeesTableColumns';



const EmployeesTable = () => {
   const [isReloading, selectedRowKeys, showTotal, reloadData, handleChangeRow, confirmDelete] = useServicesTable()
   const {loading, services, isSearching, searchedServices} = useSelector(state => state.servicesReducer)

   const data = !isSearching 
      ?  services.map(service => ({...service, key: service.id}))
      :  searchedServices.map(service => ({...service, key: service.id}))
   
   const rowSelection = {
      onChange: handleChangeRow,
   }

   const markedItems = services.filter(service => selectedRowKeys.includes(service.id))
   
   return (  
      <S.Wrapper>
         <S.ButtonsWrapper>
            <Popconfirm 
               placement="topLeft" 
               title='Are you sure to delete selected services ?' 
               onConfirm={confirmDelete} 
               okText='Yes' 
               cancelText='No'
            >
               <Button type="primary" disabled={markedItems.length === 0}>
                  delete
                  <DeleteOutlined />
               </Button>
            </Popconfirm>
            <Button type='primary' disabled={!isSearching} loading={isReloading} onClick={reloadData}>
               Reload
               <UndoOutlined />
            </Button>
            {!isSearching 
               ?  <S.P>You now see all Services.</S.P> 
               :  <S.P>You now see only searched Services. Please click reload button, to see all services again.</S.P>
            }
         </S.ButtonsWrapper>
         <S.TableWrapper>
            {( markedItems.length > 0 && isSearching ) &&
               <Alert
                  message='Warning'
                  description={`You have selected ${markedItems.length} items. If you do not see all items, please reload services table to see all selected items.`}
                  type='warning'
                  showIcon
               />
            }
            <Table
               columns={servicesTableColumns} 
               dataSource={data} 
               loading={loading}
               pagination={{
                  showSizeChanger: true,
                  showTotal,
               }}
               rowSelection={rowSelection}
            />
         </S.TableWrapper>
      </S.Wrapper>
   );
}
 
export default EmployeesTable;