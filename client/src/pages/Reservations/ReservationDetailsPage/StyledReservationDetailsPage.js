import styled, {css} from 'styled-components';
import {Card} from 'antd';
import {Link} from 'react-router-dom';

import colors from '../../../assets/colors';

export const Wrapper = styled.div`
   margin: 0 25px;
`

export const StyledCard = styled(Card)`
   margin: 0 0 40px 0;
   border-radius: 4px;
`

export const ButtonsWrapper = styled.div`
   button {
      margin: 0 10px 0 0;
   }
`

export const DetailsWrapper = styled.div`
   width: 90%;
   height: auto;
   margin: 60px 20px 40px 20px;

   display: flex;
   flex-direction: column;
`

export const Item = styled.h2`
   width: 100%;
   padding: 10px;
   color: ${colors.black85};
   font-size: 15px;

   display: flex;
`

export const Label = styled.div`
   width: 25%;
   text-align: right;
`

export const StyledLink = styled(Link)`
   margin: 0 0 0 15px;
   font-weight: 600;
`

export const Value = styled.div`
   width: 65%;
   margin: 0 0 0 15px;
   font-weight: ${({font_light}) => font_light ? 400 : 600};
   text-align: left;
`

export const NoData = styled.span`
   color: ${colors.redColor};
`