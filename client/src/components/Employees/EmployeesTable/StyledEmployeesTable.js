import styled from 'styled-components';
import {Link} from 'react-router-dom';
import colors from '../../assets/colors';

export const Wrapper = styled.div`
   margin: 20px 0 0 0;
`

export const ButtonsWrapper = styled.div`
   width: 100%;
   margin: 0 0 20px 0;
   display: flex;

   button {
      margin: 0 10px 0 0;
   }
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

export const TableWrapper = styled.div`
   border: 1px solid #e8e8e8;
   border-radius: 4px;

   .ant-table-tbody > tr > td {
      padding: 10px 16px;
   }

   .ant-pagination {
      margin: 20px;
   }

   .ant-pagination-total-text {
      margin: 0 20px 0 0;
   }
`