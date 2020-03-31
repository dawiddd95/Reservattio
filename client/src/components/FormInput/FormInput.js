import React from 'react';
import { Input } from 'formik-antd';

import * as S from './StyledFormInput';

const FormInput = ({label, name, type, long = false}) => {
   return (  
      <S.FieldWrapper long_style={long}>
         <S.Label>
            {label}:
         </S.Label>
         <Input 
            name={name}
            type={type} 
         />
         <S.StyledErrorMessage 
            name={name} 
            component='p' 
         />
      </S.FieldWrapper>
   );
}
 
export default FormInput;