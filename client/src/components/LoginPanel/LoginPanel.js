import * as React from 'react';
import { Button } from 'antd';

import * as S from './StyledLoginPanel';
import ManagerLoginForm from '../ManagerLoginForm/ManagerLoginForm';

const useLoginType = () => {
   const [loginAs, setLoginAs] = React.useState('manager');
   const handleOnClick = (loginAs) => {
      setLoginAs(loginAs)
   }
   return [loginAs, handleOnClick]
}


const LoginPanel = () => {
   const [loginAs, handleOnClick] = useLoginType();

   return (  
      <>
         <S.LoginAsWrapper>
            Log in as: 
            <S.LoginAsButton  
               selected_style={loginAs === 'manager'}
               onClick={() => handleOnClick('manager')}   
            >
               Manager
            </S.LoginAsButton>
            <S.LoginAsButton
               selected_style={loginAs === 'employee'}
               onClick={() => handleOnClick('employee')}
            >
               Employee
            </S.LoginAsButton>
         </S.LoginAsWrapper>

         {loginAs === 'manager' ? <ManagerLoginForm /> : null} {/* <EmployeeLoginPanel />} */}
         {loginAs === 'manager' && (
            <S.StyledLink to='/auth/signup'>
               Create an account
            </S.StyledLink>        
         )}
      </>
   );
}
 
export default LoginPanel;