import * as React from 'react';
import * as S from './StyledHeader';

 
const Header = ({text}) => {
   return (  
      <S.Header>
         {text}
      </S.Header>
   );
}
 
export default Header;