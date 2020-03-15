import React from 'react';
import {useSelector} from 'react-redux';

import ClientsExportToExcel from '../ClientsExportToExcel/ClientsExportToExcel';

const FetchAllClients = () => {
   const {clients} = useSelector(state => state.clientsReducer)

   return (  
      <ClientsExportToExcel 
         fileName='clients_export'
         buttonText='Export to excel'
         clients={clients}
      />
   );
}
 
export default FetchAllClients;