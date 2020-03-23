import React from 'react';

import {useFetchService} from '../../../hooks/useFetchService';

import LoadingPage from '../../../pages/LoadingPage/LoadingPage';
import ErrorPage from '../../../pages/ErrorPage/ErrorPage';
import ServiceEditPage from '../../../pages/Services/ServiceEditPage/ServiceEditPage';


const FetchServiceToEdit = ({match}) => {
   const [loading, error, data] = useFetchService(match.params.id)
   
   return (  
      <>
         {loading && <LoadingPage />}
         {error && <ErrorPage />}
         {data && <ServiceEditPage data={data} />}
      </>
   );
}
 
export default FetchServiceToEdit;