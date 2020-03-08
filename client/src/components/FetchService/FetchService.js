import React from 'react';
import axios from 'axios';

import LoadingPage from '../../pages/LoadingPage/LoadingPage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import ServiceDetailsPage from '../../pages/ServiceDetailsPage/ServiceDetailsPage';



const useFetch = (id) => {
   const [loading, setLoading] = React.useState(true);
   const [error, setError] = React.useState(false)
   const [data, setData] = React.useState()

   React.useEffect(() => {
      setLoading(true);

      const fetchData = async () => {
         setError(false)

         try {
            const response = await axios.get(`/api/user/services/${id}`, {withCredentials: true})
            setData(response.data.service)
         } catch(error) {
            setError(true)
         }
      
         setLoading(false);
      }
      fetchData()
   }, [])

   return [loading, error, data]
}



const FetchService = ({match}) => {
   const [loading, error, data] = useFetch(match.params.id)
   
   return (  
      <>
         {loading && <LoadingPage />}
         {error && <ErrorPage />}
         {data && <ServiceDetailsPage data={data} />}
      </>
   );
}
 
export default FetchService;