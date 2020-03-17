import React from 'react';
import {Button, Table, Popconfirm, Alert} from 'antd';
import { UndoOutlined, DeleteOutlined } from '@ant-design/icons';
import {useSelector} from 'react-redux';

import * as S from './StyledEmployeesTable';
import {useEmployeesTable} from '../../../hooks/useEmployeesTable';
import {employeesTableColumns} from '../../../assets/data/employeesTableColumns';


const EmployeesTable = () => {
   const [isReloading, selectedRowKeys, showTotal, reloadData, handleChangeRow, confirmDelete] = useEmployeesTable()
   const {loading, employees, isSearching, searchedEmployees} = useSelector(state => state.employeesReducer)

   const data = !isSearching 
      ?  employees.map(employee => ({...employee, key: employee.id}))
      :  searchedEmployees.map(employee => ({...employee, key: employee.id}))
   
   const rowSelection = {
      onChange: handleChangeRow,
   }

   const markedItems = employees.filter(employee => selectedRowKeys.includes(employee.id))

   return (  
      <S.Wrapper>
         <S.ButtonsWrapper>
            <Popconfirm 
               placement="topLeft" 
               title='Are you sure to delete selected employees ?' 
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
               ?  <S.P>You now see all Employees.</S.P> 
               :  <S.P>You now see only searched Employees. Please click reload button, to see all employees again.</S.P>
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
               columns={employeesTableColumns} 
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