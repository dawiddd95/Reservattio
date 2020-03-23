import React from 'react';
import {useSelector} from 'react-redux';

import ClientsExportToExcel from '../Clients/ClientsExportToExcel/ClientsExportToExcel';

const ExportToExcel = ({entity}) => {
   const {clients} = useSelector(state => state.clientsReducer)

   return ( 
      <> 
         {entity === 'clients' &&
            <ClientsExportToExcel 
               fileName={'clients_export'}
               buttonText='Export to excel'
               clients={clients}
            />
         }
      </>
   );
}
 
export default ExportToExcel;