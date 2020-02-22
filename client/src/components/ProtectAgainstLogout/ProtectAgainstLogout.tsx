import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

export interface ProtectAgainstLogoutProps extends RouteProps {
   component: React.ComponentType<RouteProps>
}
 
const ProtectAgainstLogout: React.SFC<ProtectAgainstLogoutProps> = ({ component: Component }) => {
   const session = sessionStorage.getItem('session');

   return <Route render={(props) => (
      session ? <Redirect to='/user/reservations' /> : <Component {...props} />
   )} />
}
 
export default ProtectAgainstLogout;