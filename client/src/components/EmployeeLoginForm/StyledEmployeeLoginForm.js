import styled from 'styled-components';
import {ErrorMessage} from 'formik';
import { Input } from 'formik-antd'

import colors from '../../assets/colors';

export const Wrapper = styled.div`
   width: 85%;
   height: 100%;
   margin: 25px auto 20px auto;
`

export const FieldWrapper = styled.div`
   width: 100%;
   height: 60px;
   margin: 0 0 5px 0;
   color: rgba(0,0,0,0.65);

   display: flex;
   flex-direction: column;
`

export const StyledInput = styled(Input)`
   padding: 18px 10px;
`

export const StyledErrorMessage = styled(ErrorMessage)`
   margin-right: auto;
   margin-left: 5px;
   font-family: 'segoe';
   font-size: 14px;
   color: ${colors.redColor};
`

export const SubmitButtonWrapper = styled.div`
   margin: 10px 0 0 0;
`