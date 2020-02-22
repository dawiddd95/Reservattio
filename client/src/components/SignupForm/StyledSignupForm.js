import styled from 'styled-components';
import {ErrorMessage} from 'formik';
import { Form, Input } from 'formik-antd'
import {Link} from 'react-router-dom';

import colors from '../../assets/colors';

export const Wrapper = styled.div`
   width: 85%;
   height: 100%;
   margin: 45px auto 20px auto;
`

export const StyledForm = styled(Form)`
   width: 100%;
`

export const FieldWrapper = styled.div`
   width: 100%;
   min-height: 60px;
   height: 100%;
   margin-bottom: 8px;
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

export const Error = styled.p`
   margin-right: auto;
   margin-left: 5px;
   font-family: 'segoe';
   font-size: 14px;
   color: ${colors.redColor};
`

export const Button = styled.button`
   width: 100%;
   height: 40px;
   margin-top: 10px;
   padding: 0 15px;
   font-size: 16px;
   font-family: segoe;
   color: white;
   border: 0;
   border-color: ${colors.redColor};
   border-radius: 4px;
   background-color: ${({disabled}) => disabled ? colors.redColorDisabled : colors.redColor};
   text-shadow: 0 -1px 0 rgba(0,0,0,0.12);
   box-shadow: 0 2px 0 rgba(0,0,0,0.045);
   outline: 0;
   transition: .3s;
   cursor: ${({disabled}) => disabled ? 'not-allowed' : 'pointer'};

   display: flex;
   justify-content: center;

   &:hover {
      background-color: ${({disabled}) => disabled ? colors.redColorDisabled : colors.redColor};
      border-color: ${colors.hoverRedColor};
      transition: .3s;
   }
`

export const LinkWrapper = styled.div`
   width 100%;

   display: flex;
   justify-content: center;
`

export const StyledLink = styled(Link)`
   margin: 20px 0;
   color: #f5222d;
   font-size: 16px;
   font-family: segoe;
   text-decoration: none;
   transition: .3s;

   :hover {
      color: rgba(245,34,45,0.4);
      transition: .3s;
   }
`