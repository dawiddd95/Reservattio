import styled from 'styled-components';
import { Alert } from 'antd';

import colors from '../../assets/colors';

export const Wrapper = styled.div`
   width: 50%;
   margin: 30px 0;
   font-size: 40px;
   border: 1px dashed #d9d9d9;
   border-radius: 4px;
   position: relative;
   overflow: hidden;
   transition: .3s;

   :hover {
      border: 1px dashed ${colors.primary};
      transition: .3s;
   }
`

export const ImportButton = styled.button`
   width: 100%;
   height: 100%;
   padding: 0 0 15px 0;
   background-color: #fafafa;
   font-size: 14px;
   outline: 0;
   border: 0;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

export const ImportInput = styled.input`
   width: 100%;
   height: 100%;
   position: absolute;
   left: 0;
   top: 0;
   opacity: 0;
`

export const IconWrapper = styled.div`
   font-size: 50px;
   color: ${colors.primary};
`

export const StyledAlert = styled(Alert)`
   width: 50%;
   margin: 0 0 30px 0;
`

export const Div = styled.div`
   margin: 0 0 40px 0; 
   font-weight: 700;
`

export const P = styled.p`
   margin: ${({indent}) => indent ? '0 0 0 60px' : '0 0 0 40px'};
`