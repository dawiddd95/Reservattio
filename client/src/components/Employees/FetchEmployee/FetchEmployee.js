import React from 'react';

import {useFetchItem} from '../../../hooks/useFetchItem';

import LoadingPage from '../../../pages/LoadingPage/LoadingPage';
import ErrorPage from '../../../pages/ErrorPage/ErrorPage';
import EmployeeDetailsPage from '../../../pages/Employees/EmployeeDetailsPage/EmployeeDetailsPage';


const FetchEmployee = ({match}) => {
   // Dac useFetchItem i reuzyc dla wszystkich fetchPojedynczego
   const [loading, error, data] = useFetchItem(`/api/user/employees/${match.params.id}`, 'employee')
   
   return (  
      <>
         {loading && <LoadingPage />}
         {error && <ErrorPage />}
         {data && <EmployeeDetailsPage data={data} />}
      </>
   );
}
 
export default FetchEmployee;