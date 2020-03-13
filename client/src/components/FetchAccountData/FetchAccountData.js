import React from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';

import {fetchedServicesThunk} from '../../app/services/thunks';
import {fetchedClientsThunk} from '../../app/clients/thunks';


import AppLayout from '../../layout/AppLayout/AppLayout';
import LoadingPage from '../../pages/LoadingPage/LoadingPage';


const useFetch = () => {
   const dispatch = useDispatch();
   const [loading, setLoading] = React.useState(true);

   React.useEffect(() => {
      setLoading(true);

      const fetchData = async () => {
         const account = await axios.get('/api/account/logged-account');
         const {fetched} = account.data

         if(fetched) {
            // dispatch(thunkActions.fetchedServicesThunk(fetched[0].Reservations))
            // dispatch(thunkActions.fetchedServicesThunk(fetched[0].Employees))
            dispatch(fetchedClientsThunk(fetched[0].Clients))
            dispatch(fetchedServicesThunk(fetched[0].Services))
         }
         setLoading(false);
      }
      fetchData()
   }, [])

   return [loading]
}



const FetchAccountData = () => {
   const [loading] = useFetch();

   return (
      <>
         {loading ? <LoadingPage /> : <AppLayout />}
      </>
   )
}
 
export default FetchAccountData;