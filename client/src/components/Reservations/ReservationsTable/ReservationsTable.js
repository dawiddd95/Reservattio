import React from 'react';
import {Button, Table, Popconfirm, Alert} from 'antd';
import { UndoOutlined, DeleteOutlined } from '@ant-design/icons';
import {useSelector} from 'react-redux';

import * as S from './StyledReservationsTable';
import {useReservationsTable} from '../../../hooks/useReservationsTable';
import {reservationsTableColumns} from '../../../assets/data/reservationsTableColumns';


const ReservationsTable = () => {
   const [isReloading, selectedRowKeys, showTotal, reloadData, handleChangeRow, confirmDelete] = useReservationsTable()
   const {loading, reservations, isSearching, searchedReservations} = useSelector(state => state.reservationsReducer)

   const data = !isSearching 
      ?  reservations.map(reservation => ({...reservation, key: reservation.id}))
      :  searchedReservations.map(reservation => ({...reservation, key: reservation.id}))
   
   const rowSelection = {
      onChange: handleChangeRow,
   }

   const markedItems = reservations.filter(reservation => selectedRowKeys.includes(reservation.id))

   return (  
      <S.Wrapper>
         <S.ButtonsWrapper>
            <Popconfirm 
               placement="topLeft" 
               title='Are you sure to delete selected reservations ?' 
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
               ?  <S.P>You now see all reservations.</S.P> 
               :  <S.P>You now see only searched reservations. Please click reload button, to see all reservations again.</S.P>
            }
         </S.ButtonsWrapper>
         <S.TableWrapper>
            {( markedItems.length > 0 && isSearching ) &&
               <Alert
                  message='Warning'
                  description={`You have selected ${markedItems.length} items. If you do not see all items, please reload employees table to see all selected items.`}
                  type='warning'
                  showIcon
               />
            }
            <Table
               columns={reservationsTableColumns} 
               dataSource={data} 
               loading={loading}
               scroll={{x: '100vh'}}
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
 
export default ReservationsTable;