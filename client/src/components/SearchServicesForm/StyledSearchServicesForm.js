import styled from 'styled-components';
import { Form } from 'formik-antd';

export const Wrapper = styled.div`
   width: 90%;
   height: 100%;
   margin: 15px auto 25px auto;
`

export const StyledForm = styled(Form)`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
`

export const FieldWrapper = styled.div`
   width: 48%;
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

export const ButtonsWrapper = styled.div`
   width: 100%;
   margin: 20px 0 0 0;

   display: flex;
   justify-content: flex-end;

   button {
      margin: 0 0 0 15px;
   }
`