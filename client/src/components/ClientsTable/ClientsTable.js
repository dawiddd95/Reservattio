import React from 'react';
import {Button, Table, Popconfirm, Alert} from 'antd';
import { UndoOutlined, DeleteOutlined } from '@ant-design/icons';
import {useSelector} from 'react-redux';

import * as S from './StyledClientsTable';
import {useClientsTable} from '../../hooks/useClientsTable';

import {clientsTableColumns} from '../../assets/data/clientsTableColumns';



const ClientsTable = () => {
   const [isReloading, selectedRowKeys, showTotal, reloadData, handleChangeRow, confirmDelete] = useClientsTable()
   const {loading, clients, isSearching, searchedClients} = useSelector(state => state.clientsReducer)

   const data = !isSearching 
      ?  clients.map(client => ({...client, key: client.id}))
      :  searchedClients.map(client => ({...client, key: client.id}))
   
   const rowSelection = {
      onChange: handleChangeRow,
   }

   const markedItems = clients.filter(client => selectedRowKeys.includes(client.id))
   
   return (  
      <S.Wrapper>
         <S.ButtonsWrapper>
            <Popconfirm 
               placement="topLeft" 
               title='Are you sure to delete selected clients ?' 
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
               ?  <S.P>You now see all Clients.</S.P> 
               :  <S.P>You now see only searched Clients. Please click reload button, to see all clients again.</S.P>
            }
         </S.ButtonsWrapper>
         <S.TableWrapper>
            {( markedItems.length > 0 && isSearching ) &&
               <Alert
                  message='Warning'
                  description={`You have selected ${markedItems.length} items. If you do not see all items, please reload clients table to see all selected items.`}
                  type='warning'
                  showIcon
               />
            }
            <Table
               columns={clientsTableColumns} 
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
 
export default ClientsTable;