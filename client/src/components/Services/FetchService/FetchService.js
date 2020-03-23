import React from 'react';

import {useFetchService} from '../../../hooks/useFetchService';

import LoadingPage from '../../../pages/LoadingPage/LoadingPage';
import ErrorPage from '../../../pages/ErrorPage/ErrorPage';
import ServiceDetailsPage from '../../../pages/Services/ServiceDetailsPage/ServiceDetailsPage';


const FetchService = ({match}) => {
   const [loading, error, data] = useFetchService(match.params.id)
   
   return (  
      <>
         {loading && <LoadingPage />}
         {error && <ErrorPage />}
         {data && <ServiceDetailsPage data={data} />}
      </>
   );
}
 
export default FetchService;