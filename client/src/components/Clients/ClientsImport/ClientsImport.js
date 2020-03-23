import React from 'react';
import { Spin, Card } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

import * as S from './StyledClientsImport';
import {useImport} from '../../../hooks/useImport';

const ClientsImport = () => {
   const [loading, data, error, uploadFile, showError] = useImport()

   return (  
      <>
         {error && showError(error)}
         <S.Wrapper>
            <Spin size='large' spinning={loading}>
               <S.ImportButton type='file'>
                  <S.IconWrapper>
                     <InboxOutlined color='white'/>
                  </S.IconWrapper>
                  Click or drag the file to this area to upload
               </S.ImportButton>
               <S.ImportInput  
                  type='file' 
                  accept='.xls, .xlsx' 
                  onChange={(event) => uploadFile(event)} 
                  disabled={loading}
               />
            </Spin>
         </S.Wrapper>
         {data && 
            <>
               <S.StyledAlert message="Data imported succesfully." type="success" />
               <Card title='Imported Data'>
                  {data !==  null && data.map(client => 
                     <S.Div key={client.id}>
                        <S.P>[</S.P>
                        <S.P indent='true'>name: {client.name}</S.P>
                        <S.P indent='true'>surname: {client.surname}</S.P>
                        <S.P indent='true'>phone: {client.phone}</S.P>
                        <S.P indent='true'>note: {client.note}</S.P>
                        <S.P>]</S.P>
                     </S.Div>   
                  )}
               </Card>
            </>
         }
      </>
   );
}
 
export default ClientsImport;