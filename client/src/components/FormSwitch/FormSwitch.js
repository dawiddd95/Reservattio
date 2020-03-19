import React from 'react';

import * as S from './StyledFormSwitch';

const FormSwitch = ({label, name, defaultChecked, disabled}) => {
   return (  
      <S.FieldWrapper>
         <S.Label>
            {label}:
         </S.Label>
         <S.StyledSwitch
            name={name} 
            defaultChecked={defaultChecked}
            disabled={disabled}
         />
      </S.FieldWrapper>
   );
}
 
export default FormSwitch;