import React from 'react';

import {useFetchClient} from '../../hooks/useFetchClient';

import LoadingPage from '../../pages/LoadingPage/LoadingPage';
import ClientDetailsPage from '../../pages/ClientDetailsPage/ClientDetailsPage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';


const FetchClient = ({match}) => {
   const [loading, error, data] = useFetchClient(match.params.id)
   
   return (  
      <>
         {loading && <LoadingPage />}
         {error && <ErrorPage />}
         {data && <ClientDetailsPage data={data} />}
      </>
   );
}
 
export default FetchClient;