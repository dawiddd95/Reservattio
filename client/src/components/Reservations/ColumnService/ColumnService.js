import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';


const ColumnService = ({id}) => {
   const {services} = useSelector(state => state.servicesReducer) 
   const service = services.filter(service => service.id === id)


   return <Link to={`/user/services/${id}`}>{service[0].name}</Link>
}
 
export default ColumnService;