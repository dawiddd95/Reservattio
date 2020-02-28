import React from 'react';
import {Alert} from 'antd';
import * as S from './StyledFormAlert';

const FormAlert = ({result}) => {
   const {success, error, successText} = result;

   return (  
      <S.Wrapper>
         {error && (
            <Alert 
               message={'Error'}
               description={error} 
               type='error'
               showIcon 
            />
         )}
         {success && (
            <Alert 
               message='Success'
               description={successText} 
               type="success"
               showIcon 
            />
         )}
      </S.Wrapper>
   );
}
 
export default FormAlert;