import React from 'react';
import * as S from './StyledLoadingPage';


const LoadingPage = () => {
   return (  
      <S.Wrapper>
         <S.MainContent>
            <S.Box>
               <S.Spinner></S.Spinner>
               <S.P>Loading Data... </S.P>
            </S.Box>
         </S.MainContent>
      </S.Wrapper>
   );
}
 
export default LoadingPage;