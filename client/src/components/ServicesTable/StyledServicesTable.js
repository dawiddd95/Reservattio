import styled from 'styled-components';
import {Link} from 'react-router-dom';
import colors from '../../assets/colors';

export const Wrapper = styled.div`
   margin: 20px 0 0 0;
`

export const ReloadWrapper = styled.div`
   width: 100%;
   margin: 0 0 20px 0;
   display: flex;
`

export const P = styled.p`
   margin: 0 0 0 10px;
   color: ${colors.primary};
   display: flex;
   align-items: center;
`

export const StyledLink = styled(Link)`
   margin: 0 10px;
`