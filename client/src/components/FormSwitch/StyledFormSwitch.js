import styled from 'styled-components';
import {Switch} from 'formik-antd';
import colors from '../../assets/colors';

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

export const StyledSwitch = styled(Switch)`
   width: 50px;
   margin: 10px 0 0 0;
`