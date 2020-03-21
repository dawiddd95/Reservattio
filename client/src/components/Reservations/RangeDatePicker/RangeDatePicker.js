import React from 'react';
import {DatePicker} from 'formik-antd';

import * as S from './StyledRangeDatePicker';

const { RangePicker } = DatePicker;

const RangeDatePicker = ({name, label}) => {
   return (  
      <S.FieldWrapper>
         <S.Label>
            {label}:
         </S.Label>
         <RangePicker 
            name={name} 
            showTime={{ format: 'HH:mm' }}
            format="YYYY-MM-DD HH:mm"
            style={{'width': '100%'}}   
         />
         <S.StyledErrorMessage 
            name={name}
            component='p' 
         />
      </S.FieldWrapper>
   );
}
 
export default RangeDatePicker;