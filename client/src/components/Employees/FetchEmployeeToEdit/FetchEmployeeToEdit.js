import React from 'react';

import {useFetchItem} from '../../../hooks/useFetchItem';

import LoadingPage from '../../../pages/LoadingPage/LoadingPage';
import ErrorPage from '../../../pages/ErrorPage/ErrorPage';
import EmployeeEditPage from '../../../pages/Employees/EmployeeEditPage/EmployeeEditPage';


const FetchEmployee = ({match}) => {
   // Dac useFetchItem i reuzyc dla wszystkich fetchPojedynczego
   const [loading, error, data] = useFetchItem(`/api/user/employees/${match.params.id}`, 'employee')
   
   // Dac warunek jesli edit to to jesli nie to tamto
   return (  
      <>
         {loading && <LoadingPage />}
         {error && <ErrorPage />}
         {data && <EmployeeEditPage data={data} />}
      </>
   );
}
 
export default FetchEmployee;