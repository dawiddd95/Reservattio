import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectAgainstLogin = ({component: Component}) => {
   const session = sessionStorage.getItem('session');

   return <Route render={(props) => (
      session ? <Component {...props} /> : <Redirect to='/auth/login' />
   )} />
}

export default ProtectAgainstLogin;