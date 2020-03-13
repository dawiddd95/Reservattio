import React from 'react';
import axios from 'axios';

export const useFetchClient = (id) => {
   const [loading, setLoading] = React.useState(true);
   const [error, setError] = React.useState(false)
   const [data, setData] = React.useState()

   React.useEffect(() => {
      setLoading(true);

      const fetchData = async () => {
         setError(false)

         try {
            const response = await axios.get(`/api/user/clients/${id}`, {withCredentials: true})
            // można dać samo response.data i reuzyc ten hook
            setData(response.data.client)
         } catch(error) {
            setError(true)
         }
      
         setLoading(false);
      }
      fetchData()
   }, [])

   return [loading, error, data]
}