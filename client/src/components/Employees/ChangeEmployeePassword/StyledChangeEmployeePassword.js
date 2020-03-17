import styled from 'styled-components';
import {ErrorMessage} from 'formik';
import colors from '../../../assets/colors';

export const FormWrapper = styled.div`
   width: 100%;
   height: 100%;
   margin: 15px auto 25px auto;
`

export const DataWrapper = styled.div`
   width: 60%;
   height: 100%;
   margin-bottom: 8px;

   display: flex;
   flex-direction: column;
`

export const Label = styled.label`
   margin: 5px 10px 0 0;
   font-weight: 600;
   color: black;
`

export const FormInputWrapper = styled(DataWrapper)``

export const StyledErrorMessage = styled(ErrorMessage)`
   margin-right: auto;
   margin-left: 5px;
   font-family: 'segoe';
   font-size: 14px;
   color: ${colors.redColor};
`

export const ButtonsWrapper = styled.div`
   width: 100%;

   display: flex;
   justify-content: flex-end;

   button {
      margin: 40px 0 0 15px;
   }
`

