import styled from 'styled-components';

export const Wrapper = styled.div`
   width: 100%;
   min-height: 100vh;
   height: 100%;
   background-color: white;
   
   display: flex;
   justify-content: center;
   align-items: center;

   @media (max-width: 959px) {
      flex-direction: column;
   }
`

export const Img = styled.img`
   width: 478px;
   height: 406px;

   @media (max-width: 959px) {
      width: 239px;
      height: 203px;
   }
`

export const TextWrapper = styled.div`
   height: 300px;
   margin: 0 0 0 60px;
   
   display: flex;
   flex-direction: column;
   justify-content: center;

   @media (max-width: 959px) {
      margin: 0;
      padding: 0 20px;
      justify-content: flex-start;
   }
`

export const Header = styled.h1`
   margin-bottom: 24px;
   font-weight: normal;
   font-size: 60px;
   font-family: nobel;
   color: #434E59;

   @media (max-width: 959px) {
      font-size: 40px;
   }
`

export const Text = styled.p`
   margin-top: -10px;
   font-size: 20px;
   font-family: segoe;
   color: #595959;

   @media (max-width: 959px) {
      font-size: 14px;
   }
`