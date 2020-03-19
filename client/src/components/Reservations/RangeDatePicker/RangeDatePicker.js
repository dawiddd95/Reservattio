import React from 'react';
import {DatePicker} from 'formik-antd';

import * as S from './StyledRangeDatePicker';

const { RangePicker } = DatePicker;

const RangeDatePicker = () => {
   return (  
      <S.FieldWrapper>
         <S.Label>
            Period:
         </S.Label>
         <RangePicker name='date' />
         <S.StyledErrorMessage 
            name='date' 
            component='p' 
         />
      </S.FieldWrapper>
   );
}
 
export default RangeDatePicker;