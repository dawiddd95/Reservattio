import styled from 'styled-components';
import {ErrorMessage} from 'formik';
import { Input } from 'formik-antd';
import { SubmitButton } from 'formik-antd';
import colors from '../../../assets/colors';

export const Wrapper = styled.div`
   width: 85%;
   height: 100%;
   margin: 45px auto 20px auto;
`

export const StyledSubmitButton = styled(SubmitButton)`
   margin: 20px 0 0 0;
`