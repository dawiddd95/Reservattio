import React from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

import actions from '../app/clients/actions';

export const useClientsTable = () => {
   const dispatch = useDispatch()
   const {clients, isSearching, searchedClients} = useSelector(state => state.clientsReducer)
   const [isReloading, setIsReloading] = React.useState(false)
   const [selectedRowKeys, setSelectedRowKeys] = React.useState([])

   const showTotal = () => {
      if(isSearching) return `Total ${searchedClients.length} items`
      else return `Total ${clients.length} items`
   }

   const reloadData = () => {
      setIsReloading(true)
      dispatch(actions.isSearchingClients(false))
      setIsReloading(false)
   }

   const handleChangeRow = (selectedRowKeys) => {
      setSelectedRowKeys(selectedRowKeys)
   }

   const confirmDelete = async () => {
      const response = await axios.post('/api/user/clients/delete', {id: selectedRowKeys}, {withCredentials: true})
      const {success} = response.data;

      if(success) {
         dispatch(actions.deleteClient(selectedRowKeys))
         dispatch(actions.deleteSearchClient(selectedRowKeys))
      }
   }
   
   return [isReloading, selectedRowKeys, showTotal, reloadData, handleChangeRow, confirmDelete]
}