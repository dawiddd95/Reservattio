import styled from 'styled-components';
import {ErrorMessage} from 'formik';
import { Input } from 'formik-antd'
import {Link} from 'react-router-dom';

import colors from '../../../assets/colors';

export const Wrapper = styled.div`
   width: 85%;
   height: 100%;
   margin: 0 auto 20px auto;
`

export const CheckboxWrapper = styled.div`
   margin: 5px 0 0 0;

   display: flex;
   align-items: center;
`

export const Label = styled.label`
   font-family: segoe;
   font-size: 14px;
   color: rgba(0,0,0,0.65);
`

export const SubmitButtonWrapper = styled.div`
   margin: 40px 0 0 0;
`

export const StyledLink = styled(Link)`
   margin-left: auto;
   color: ${colors.primary};
   text-decoration: none;
   font-family: segoe;
   font-size: 14px;
   transition: .3s;

   :hover {
      color: ${colors.primaryLight};
      transition: .3s;
   }
`