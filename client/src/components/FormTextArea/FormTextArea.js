import React from 'react';
import { Input } from 'formik-antd';

import * as S from './StyledFormTextArea';


const { TextArea } = Input;

const FormTextArea = ({label, name, placeholder}) => {
   return (  
      <S.FieldWrapper>
         <S.Label>
            {label}:
         </S.Label>
         <TextArea name={name} placeholder={placeholder} rows={4} autoSize={true} />
      </S.FieldWrapper>
   );
}
 
export default FormTextArea;