import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';


const ColumnClient = ({id}) => {
   const {clients} = useSelector(state => state.clientsReducer) 
   const client = clients.filter(client => client.id === id)


   return <Link to={`/user/clients/${id}`}>{client[0].name} {client[0].surname}</Link>
}
 
export default ColumnClient;