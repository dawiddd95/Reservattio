import * as React from 'react';
import {Switch, Route} from 'react-router-dom';

import EmployeesPage from '../pages/Employees/EmployeesPage/EmployeesPage';
import EmployeeNewPage from '../pages/Employees/EmployeeNewPage/EmployeeNewPage';
import FetchEmployee from '../components/Employees/FetchEmployee/FetchEmployee';
import ErrorPage from '../pages/ErrorPage/ErrorPage';


const EmployeesRoutes = () => {
   return (  
      <Switch>
         <Route exact path='/user/employees' component={EmployeesPage} />
         <Route exact path='/user/employees/new' component={EmployeeNewPage} /> 
         <Route exact path='/user/employees/:id' component={FetchEmployee} />
         {/* <Route exact path='/user/services/:id/edit' component={FetchServiceToEdit} /> */}
         <Route component={ErrorPage} />
      </Switch>
   )
}
 
export default EmployeesRoutes;