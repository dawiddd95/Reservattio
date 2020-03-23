import React from 'react';
import ReactExport from 'react-export-excel';
import {Button} from 'antd';
import {FileExcelOutlined} from '@ant-design/icons';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;



const ClientsExportToExcel = ({fileName, buttonText, clients}) => {
   return (  
      <ExcelFile 
         element={
            <Button type='default'>
               <FileExcelOutlined />
               {buttonText}
            </Button>
         }
         filename={fileName} 
         fileExtension='xlsx'
      >
         <ExcelSheet data={clients} name={fileName}>
            <ExcelColumn label='Name' value='name' />
            <ExcelColumn label='Surname' value='surname' />
            <ExcelColumn label='Phone' value='phone' />
            <ExcelColumn label='Note' value='note' />
         </ExcelSheet>
      </ExcelFile>
   );
}
 
export default ClientsExportToExcel;
