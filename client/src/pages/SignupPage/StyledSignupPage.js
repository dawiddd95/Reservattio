import styled from 'styled-components';
import background from '../../assets/img/signup.jpg';

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
`