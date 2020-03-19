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

   &:hover {
      text-decoration: underline;
   }
`

export const Value = styled.div`
   width: 65%;
   margin: 0 0 0 15px;
   font-weight: 600;
   text-align: left;
`

export const Status = styled.button`
   height: 25px;
   padding: 0 7px;
   border-radius: 4px;
   color: white;
   font-size: 12px;
   font-family: Arial;
   outline: 0;
   border: 0;

   ${({status_style}) => status_style === 'Cancelled' && css`
      background-color: #FF6D25;
   `}
   ${({status_style}) => status_style === 'Reserved' && css`
      background-color: ${colors.primary};
   `}
   ${({status_style}) => status_style === 'In Progress' && css`
      background-color: #99D57D;
   `}
   ${({status_style}) => status_style === 'Completed' && css`
      background-color: ${colors.disable};
      border: 1px solid ${colors.silverColor};
      color: black;
   `}
`

export const NoData = styled.span`
   color: ${colors.redColor};
`