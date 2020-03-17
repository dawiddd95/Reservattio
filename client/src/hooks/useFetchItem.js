import React from 'react';
import axios from 'axios';

export const useFetchItem = (url, entity) => {
   const [loading, setLoading] = React.useState(true);
   const [error, setError] = React.useState(false)
   const [data, setData] = React.useState(null)

   React.useEffect(() => {
      setLoading(true);

      const fetchData = async () => {
         setError(false)

         try {
            const response = await axios.get(url, {withCredentials: true})
            setData(response.data[entity])
         } catch(error) {
            setError(true)
         }
      
         setLoading(false);
      }
      fetchData()
   }, [])

   return [loading, error, data]
}