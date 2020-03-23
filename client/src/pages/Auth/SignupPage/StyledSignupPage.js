import styled from 'styled-components';
import {Link} from 'react-router-dom';
import background from '../../../assets/img/signup.jpg';
import colors from '../../../assets/colors';

export const Wrapper = styled.div`
   width: 100%;
   min-height: 100vh;
   height: 100%;
   background-image: url(${background});
   background-size: cover;
   background-position: center;

   display: flex;
   justify-content: flex-end;
`

export const Content = styled.div`
   width: 500px;
   min-height: 100vh;
   height: 100%;
   background-color: white;

   display: flex;
   flex-direction: column;

   @media (max-width: 959px) {
      width: 100%;
   }
`

export const StyledLink = styled(Link)`
   margin: 20px auto 0 auto;
   color: ${colors.primary};
   font-size: 16px;
   font-family: segoe;
   text-decoration: none;
   transition: .3s;

   :hover {
      color: ${colors.primaryLight}
      transition: .3s;
   }
`