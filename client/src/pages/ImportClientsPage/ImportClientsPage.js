import React from 'react';

import * as S from './StyledImportClientsPage';

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ClientsExportToExcel from '../../components/ClientsExportToExcel/ClientsExportToExcel';
import ClientsImport from '../../components/ClientsImport/ClientsImport';

const ImportClientsPage = () => {
   return (  
      <S.Wrapper>
         <Breadcrumb 
            links={[
               {to: '/user/clients', label: 'Home'},
               {to: '/user/clients', label: 'Clients'}
            ]}
            text='Import Clients'
         />
         <S.StyledCard title='Import Clients' bordered margin_style='true'>
            <ClientsExportToExcel 
               fileName='clients_import_template'
               buttonText='Download the template'
               clients={[]}
            />
            <ClientsImport />
         </S.StyledCard>
      </S.Wrapper>
   );
}
 
export default ImportClientsPage;