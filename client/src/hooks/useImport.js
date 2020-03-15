import React from 'react';
import axios from 'axios';
import XLSX from 'xlsx';
import {useDispatch} from 'react-redux';
import { notification } from 'antd';

import actions from '../app/clients/actions';

export const useImport = () => {
   const dispatch = useDispatch()
   const [loading, setLoading] = React.useState(false)
   const [data, setData] = React.useState(null)
   const [error, setError] = React.useState(null)

   const importedClients = []
   let counter = 1

   const showError = (error) => {
      if(error !== null) {
         notification.error({
            message: 'Import Error',
            description: error,
            placement: 'topRight',
            showIcon: true,
         });
         setError(null)
      }
   }

   const uploadFile = (e) => {
      setLoading(true)
      const files = e.target.files, f = files[0];

      const reader = new FileReader();

      reader.onload = async function (e) {
         const data = e.target.result;
         let readedData = XLSX.read(data, {type: 'binary'});
         const wsname = readedData.SheetNames[0];
         const ws = readedData.Sheets[wsname];
         const dataParse = XLSX.utils.sheet_to_json(ws, {header:1});

         for(let i = 1; i < dataParse.length; i++) {
            const client = {
               name: dataParse[i][0],
               surname: dataParse[i][1],
               phone: dataParse[i][2],
               note: dataParse[i][3],
            }
            importedClients.push(client)        
            counter++         
         }

         if(counter === dataParse.length) {
            const response = await axios.post('/api/user/clients/import', {importedClients}, {withCredentials: true})
            const {data, error} = response.data;

            if(data) {
               setData(data)
               setError(null)
               dispatch(actions.importClients(data))
            }
            
            if(error) {
               setError(error)
               setData(null)
            }
            
            setLoading(false)
         }
      };
      reader.readAsBinaryString(f)
   }

   return [loading, data, error, uploadFile, showError]
}