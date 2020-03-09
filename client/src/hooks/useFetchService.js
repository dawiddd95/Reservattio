import React from 'react';
import axios from 'axios';

export const useFetchService = (id) => {
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