import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'antd';
import {EditOutlined, CopyOutlined} from '@ant-design/icons';

import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import DeleteService from '../../../components/Services/DeleteService/DeleteService';

import * as S from './StyledServiceDetailsPage'

const ServiceDetailsPage = ({data}) => {
   return (  
      <S.Wrapper>
         <Breadcrumb 
            links={[
               {to: '/user/serivces', label: 'Home'},
               {to: '/user/services', label: 'Services'}
            ]}
            text={`Service: ${data.id}`}
         />
         <S.StyledCard title='Service Details' bordered>
            <S.ButtonsWrapper>
               <Link to={`/user/services/${data.id}/edit`}>
                  <Button type='primary'>
                     <EditOutlined />
                     Edit
                  </Button>
               </Link>
               <DeleteService 
                  id={data.id}
                  buttonType='primary' 
               />
               <Link to='/auth/login'>
                  <Button>
                     <CopyOutlined />
                     Audit Logs
                  </Button>
               </Link>
            </S.ButtonsWrapper>
            <S.DetailsWrapper>
               <S.Item>
                  <S.Label>ID: </S.Label>
                  <S.Value>{data.id}</S.Value>
               </S.Item>
               <S.Item>
                  <S.Label>Name: </S.Label>
                  <S.Value>{data.name}</S.Value>
               </S.Item>
               <S.Item>
                  <S.Label>Price: </S.Label>
                  <S.Value>${data.price}</S.Value>
               </S.Item>
               <S.Item>
                  <S.Label>Note:</S.Label>
                  <S.Value>
                     {data.note
                        ? data.note
                        : <S.NoData>No Data</S.NoData>
                     }
                  </S.Value>
               </S.Item>
               <S.Item>
                  <S.Label>Created At:</S.Label>
                  <S.Value>{data.createdAt}</S.Value>
               </S.Item>
               <S.Item>
                  <S.Label>Updated At:</S.Label>
                  <S.Value>{data.updatedAt}</S.Value>
               </S.Item>
            </S.DetailsWrapper>
         </S.StyledCard>
      </S.Wrapper>
   );
}
 
export default ServiceDetailsPage;