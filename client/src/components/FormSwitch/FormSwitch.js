import React from 'react';

import * as S from './StyledFormSwitch';

const FormSwitch = ({label, name, defaultChecked}) => {
   return (  
      <S.FieldWrapper>
         <S.Label>
            {label}:
         </S.Label>
         <S.StyledSwitch
            name={name} 
            defaultChecked={defaultChecked}
         />
      </S.FieldWrapper>
   );
}
 
export default FormSwitch;