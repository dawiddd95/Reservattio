import * as React from 'react';
import * as S from './StyledLoginPage';

import Header from '../../components/Header/Header';
import LoginPanel from '../../components/LoginPanel/LoginPanel';

 
const LoginPage = () => {
   return (  
      <S.Wrapper>
         <S.Content>
            <Header text='Reservattio' /> 
            <LoginPanel />
         </S.Content>
      </S.Wrapper>
   );
}
 
export default LoginPage;