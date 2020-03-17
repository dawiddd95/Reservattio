import React from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

import actions from '../app/employees/actions';

export const useEmployeesTable = () => {
   const dispatch = useDispatch()
   const {employees, isSearching, searchedEmployees} = useSelector(state => state.employeesReducer)
   const [isReloading, setIsReloading] = React.useState(false)
   const [selectedRowKeys, setSelectedRowKeys] = React.useState([])

   const showTotal = () => {
      if(isSearching) return `Total ${searchedEmployees.length} items`
      else return `Total ${employees.length} items`
   }

   const reloadData = () => {
      setIsReloading(true)
      dispatch(actions.isSearchingEmployees(false))
      setIsReloading(false)
   }

   const handleChangeRow = (selectedRowKeys) => {
      setSelectedRowKeys(selectedRowKeys)
   }

   const confirmDelete = async () => {
      const response = await axios.post('/api/user/employees/delete', {id: selectedRowKeys}, {withCredentials: true})
      const {success} = response.data;

      if(success) {
         dispatch(actions.deleteEmployee(selectedRowKeys))
         dispatch(actions.deleteSearchEmployee(selectedRowKeys))
      }
   }
   
   return [isReloading, selectedRowKeys, showTotal, reloadData, handleChangeRow, confirmDelete]
}