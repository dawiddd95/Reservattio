import React from 'react';
import {Button} from 'antd';
import {PlusOutlined, UploadOutlined, CopyOutlined} from '@ant-design/icons';

import * as S from './StyledButtonsGroup';

import ExportToExcel from '../ExportToExcel/ExportToExcel';

const ButtonsGroup = ({entity, showImport, showExport}) => {
   return (  
      <S.Wrapper>
         <S.StyledLink to={`/user/${entity}/new`}>
            <Button type='primary'>
               <PlusOutlined color='white' />
               New
            </Button>
         </S.StyledLink>
         {showImport &&
            <S.StyledLink to={`/user/${entity}/import`}>
               <Button type='primary'>
                  <UploadOutlined />
                  Import
               </Button>
            </S.StyledLink>
         }
         <S.StyledLink to={`/user/${entity}/audit?entityNames=${entity}`}>
            <Button>
               <CopyOutlined />
               Audit Logs
            </Button>
         </S.StyledLink>
         {showExport &&
            <ExportToExcel 
               entity={entity}
            />
         }
      </S.Wrapper>
   );
}
 
export default ButtonsGroup;