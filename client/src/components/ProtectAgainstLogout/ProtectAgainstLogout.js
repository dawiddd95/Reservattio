import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectAgainstLogout = ({ component: Component }) => {
   const session = sessionStorage.getItem('session');

   return <Route render={(props) => (
      session ? <Redirect to='/user/reservations' /> : <Component {...props} />
   )} />
}
 
export default ProtectAgainstLogout;