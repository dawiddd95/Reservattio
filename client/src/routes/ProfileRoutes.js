import * as React from 'react';
import {Switch, Route} from 'react-router-dom';


import ErrorPage from '../pages/ErrorPage/ErrorPage';
import ProfilePage from '../pages/Profile/ProfilePage';


const ProfileRoutes = () => {
   return (  
      <Switch>
         <Route exact path='/user/profile' component={ProfilePage} />
         <Route component={ErrorPage} />
      </Switch>
   )
}
 
export default ProfileRoutes;