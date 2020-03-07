import styled from 'styled-components';
import {Card} from 'antd';

export const Wrapper = styled.div`
   margin: 0 25px;
`

export const StyledCard = styled(Card)`
   margin: ${({margin_style}) => margin_style ? '0 0 50px 0' : '0 0 30px 0'}
   border-radius: 4px;
`