import React from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

import actions from '../app/reservations/actions';

export const useReservationsTable = () => {
   const dispatch = useDispatch()
   const {reservations, isSearching, searchedReservations} = useSelector(state => state.reservationsReducer)
   const [isReloading, setIsReloading] = React.useState(false)
   const [selectedRowKeys, setSelectedRowKeys] = React.useState([])

   const showTotal = () => {
      if(isSearching) return `Total ${searchedReservations.length} items`
      else return `Total ${reservations.length} items`
   }


   const reloadData = () => {
      setIsReloading(true) 
      dispatch(actions.isSearchingReservations(false)) 
      setIsReloading(false) 
   }

   const handleChangeRow = (selectedRowKeys) => {
      setSelectedRowKeys(selectedRowKeys)
   }

   const confirmDelete = async () => {
      const response = await axios.post('/api/user/reservations/delete', {id: selectedRowKeys}, {withCredentials: true}) 
      const {success} = response.data; 

      if(success) {
         dispatch(actions.deleteReservation(selectedRowKeys))
         dispatch(actions.deleteSearchReservation(selectedRowKeys))
      }
   }
   
   return [isReloading, selectedRowKeys, showTotal, reloadData, handleChangeRow, confirmDelete]
}