import React from 'react';

import {useFetchClient} from '../../hooks/useFetchClient';

import LoadingPage from '../../pages/LoadingPage/LoadingPage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import ClientEditPage from '../../pages/ClientEditPage/ClientEditPage';


const FetchClient = ({match}) => {
   const [loading, error, data] = useFetchClient(match.params.id)
   
   return (  
      <>
         {loading && <LoadingPage />}
         {error && <ErrorPage />}
         {data && <ClientEditPage data={data} />}
      </>
   );
}
 
export default FetchClient;