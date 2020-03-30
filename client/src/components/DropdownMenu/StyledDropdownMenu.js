import styled from 'styled-components';
import avatar from '../../assets/img/avatar-default.jpg';

export const Wrapper = styled.div`
   margin: 0 20px 0 0;
   padding: 0 20px;
   cursor: pointer;
`

export const Span = styled.span`
   margin: 0 0 0 5px;
` 

export const Img = styled.img`
   width: 35px;
   height: 35px;
   background-image: url(${avatar});
   background-size: cover;
   background-position: center;
   border-radius: 50%;
   margin: 0 10px 0 0;
`