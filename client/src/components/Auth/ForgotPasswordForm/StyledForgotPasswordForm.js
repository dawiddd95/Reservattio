import styled from 'styled-components';
import { SubmitButton } from 'formik-antd'


export const Wrapper = styled.div`
   width: 85%;
   height: 100%;
   margin: 45px auto 20px auto;
`

export const FieldWrapper = styled.div`
   width: 100%;
   height: 60px;
   margin-bottom: 8px;
   color: rgba(0,0,0,0.65);

   display: flex;
   flex-direction: column;
`

export const StyledSubmitButton = styled(SubmitButton)`
   margin: 20px 0 0 0;
`