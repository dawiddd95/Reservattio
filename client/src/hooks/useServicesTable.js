import React from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

import actions from '../app/services/actions';

export const useServicesTable = () => {
   const dispatch = useDispatch()
   const {services, isSearching, searchedServices} = useSelector(state => state.servicesReducer)
   const [isReloading, setIsReloading] = React.useState(false)
   const [selectedRowKeys, setSelectedRowKeys] = React.useState([])

   const showTotal = () => {
      if(isSearching) return `Total ${searchedServices.length} items`
      else return `Total ${services.length} items`
   }

   const reloadData = () => {
      setIsReloading(true)
      dispatch(actions.isSearchingServices(false))
      setIsReloading(false)
   }

   const handleChangeRow = (selectedRowKeys) => {
      setSelectedRowKeys(selectedRowKeys)
   }

   const confirmDelete = async () => {
      const response = await axios.post('/api/user/services/delete', {id: selectedRowKeys}, {withCredentials: true})
      const {success} = response.data;

      if(success) {
         dispatch(actions.deleteService(selectedRowKeys))
         dispatch(actions.deleteSearchService(selectedRowKeys))
      }
   }
   
   return [isReloading, selectedRowKeys, showTotal, reloadData, handleChangeRow, confirmDelete]
}