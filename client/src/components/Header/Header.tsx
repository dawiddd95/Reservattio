import * as React from 'react';
import * as S from './StyledHeader';

export interface HeaderProps {
   text: string
}
 
const Header: React.SFC<HeaderProps> = ({text}) => {
   return (  
      <S.Header>
         {text}
      </S.Header>
   );
}
 
export default Header;