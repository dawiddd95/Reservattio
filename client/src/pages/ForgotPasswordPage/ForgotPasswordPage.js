import React from 'react';
import * as S from './StyledForgotPasswordPage';

import Header from '../../components/Header/Header';
import ForgotPasswordForm from '../../components/ForgotPasswordForm/ForgotPasswordForm';

const ForgotPasswordPage = () => {
   return (  
      <S.Wrapper>
         <S.Content>
            <Header
               text='Reservattio'
            />
            <ForgotPasswordForm />
            <S.StyledLink to='/auth/login'>
               Cancel
            </S.StyledLink>
         </S.Content>
      </S.Wrapper>
   );
}
 
export default ForgotPasswordPage;
