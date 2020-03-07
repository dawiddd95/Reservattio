import styled, {keyframes} from 'styled-components';
import colors from '../../assets/colors';

export const Wrapper = styled.div`
   width: 100%;
   height: 100%;
   overflow-x: hidden;
   font-family: segoe;

   display: flex;
`

export const MainContent = styled.main`
   width: 100%;
   height: 100%;
   overflow-x: hidden;
   margin: 0 23px;

   display: flex;
   flex-direction: column;
`

export const Box = styled.div`
   width: 100%;
   height: 500px;
   margin: 80px auto;
   background-color: white;
   border: 1px solid #E9E9E9;
   border-radius: 5px;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

export const spinnerLoader = keyframes`
   0% {
      transform: rotate(0deg);
   }
   100% {
      transform: rotate(360deg);
   }
`

export const P = styled.p`
   margin: 20px 0 0 0;
   text-align: center;
   font-size: 16px;
`

export const Spinner = styled.div`
   width: 150px;
   height: 150px;
   margin: 0 auto;
   font-size: 2px;
   border-radius: 50%;
   border-top: 1.1em solid #a6d7ff};
   border-right: 1.1em solid #a6d7ff;
   border-bottom: 1.1em solid #a6d7ff;
   border-left: 1.1em solid ${colors.primary};
   transform: translateZ(0);
   animation: ${spinnerLoader} .8s infinite linear;
`
