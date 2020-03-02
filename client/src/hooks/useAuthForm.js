import React from 'react';
import axios from 'axios';

export const useAuthForm = (url) => {
   const [loading, setLoading] = React.useState(false)
   const [result, setResult] = React.useState({})
   
   const submitForm = async values => {
      setLoading(true)
      
      const response = await axios.post(url, values)
      
      setResult(response.data)
      setLoading(false)
   }
   return [loading, result, submitForm]
}