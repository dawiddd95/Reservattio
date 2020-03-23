import styled from 'styled-components';

import {Link} from 'react-router-dom';
import colors from '../../../assets/colors';


export const LoginAsWrapper = styled.div`
   width: 85%;
   margin: 40px auto 0 auto;
   font-size: 14px;
   font-family: segoe;
   display: flex;
`

export const LoginAsButton = styled.p`
   margin-left: 10px;
   color: ${({selected_style}) => selected_style ? colors.primary : 'rgba(0,0,0,0.65)'};
   cursor: pointer;
`

export const StyledLink = styled(Link)`
   margin: 0 auto;
   color: ${colors.primary};
   text-align: center;
   font-size: 14px;
   font-family: segoe;
   text-decoration: none;
   transition: .3s;

   :hover {
      color: ${colors.primaryLight}
      transition: .3s;
   }
`