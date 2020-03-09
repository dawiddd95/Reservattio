import * as React from 'react';
import {Switch, Route} from 'react-router-dom';

import ServicesPage from '../pages/ServicesPage/ServicesPage';
import ServiceNewPage from '../pages/ServiceNewPage/ServiceNewPage';
import FetchService from '../components/FetchService/FetchService';
import FetchServiceToEdit from '../components/FetchServiceToEdit/FetchServiceToEdit';
import ErrorPage from '../pages/ErrorPage/ErrorPage';


const ServicesRoutes = () => {
   return (  
      <Switch>
         <Route exact path='/user/services' component={ServicesPage} />
         <Route exact path='/user/services/new' component={ServiceNewPage} /> 
         <Route exact path='/user/services/:id' component={FetchService} />
         <Route exact path='/user/services/:id/edit' component={FetchServiceToEdit} />
         <Route component={ErrorPage} />
      </Switch>
   )
}
 
export default ServicesRoutes;