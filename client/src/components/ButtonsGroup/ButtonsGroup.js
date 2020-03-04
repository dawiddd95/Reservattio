import React from 'react';
import {Button} from 'antd';
import {PlusOutlined, UploadOutlined, CopyOutlined, FileExcelOutlined} from '@ant-design/icons';

import * as S from './StyledButtonsGroup';

const ButtonsGroup = ({entity}) => {
   return (  
      <S.Wrapper>
         <S.StyledLink to={`/user/${entity}/new`}>
            <Button type='primary'>
               <PlusOutlined color='white' />
               New
            </Button>
         </S.StyledLink>
         <S.StyledLink to={`/user/${entity}/import`}>
            <Button type='primary'>
               <UploadOutlined />
               Import
            </Button>
         </S.StyledLink>
         <S.StyledLink to={`/user/${entity}/audit?entityNames=${entity}`}>
            <Button>
               <CopyOutlined />
               Audit Logs
            </Button>
         </S.StyledLink>
         <Button>
            <FileExcelOutlined />
            Export to excel
         </Button>
      </S.Wrapper>
   );
}
 
export default ButtonsGroup;