import React from 'react';
import * as S from './StyledSignupPage';

import Header from '../../components/Header/Header';
import SignupForm from '../../components/SignupForm/SignupForm';

const SignupPage = () => {
   return (  
      <S.Wrapper>
         <S.Content>
            <Header text='Reservattio'/>
            <SignupForm />
         </S.Content>
      </S.Wrapper>
   );
}
 
export default SignupPage;