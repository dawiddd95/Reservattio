import styled from 'styled-components';
import {ErrorMessage} from 'formik';
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

export const StyledErrorMessage = styled(ErrorMessage)`
   margin-right: auto;
   margin-left: 5px;
   font-family: 'segoe';
   font-size: 14px;
   color: ${colors.redColor};
`