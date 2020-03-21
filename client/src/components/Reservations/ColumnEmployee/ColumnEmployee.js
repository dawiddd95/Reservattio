import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';


const ColumnEmployee = ({id}) => {
   const {employees} = useSelector(state => state.employeesReducer) 
   const employee = employees.filter(employee => employee.id === id)

   return <Link to={`/user/employees/${id}`}>{employee[0].name} {employee[0].surname}</Link>
}
 
export default ColumnEmployee;