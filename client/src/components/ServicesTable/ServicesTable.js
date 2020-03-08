import React from 'react';
import {Table, Tag} from 'antd';
import {useSelector} from 'react-redux';

import * as S from './StyledServicesTable';
import DeleteService from '../DeleteService/DeleteService';


const columns = [
   { title: 'Id', dataIndex: 'id', key: 'id' },
	{ title: 'Name', dataIndex: 'name', key: 'name' },
   { title: 'Price', dataIndex: 'price', key: 'price', render: (dataIndex) => <p>${dataIndex}</p> },
   { title: 'Created At', key: 'createdAt', dataIndex: 'createdAt' },
   { 
      title: 'Action', 
      key: 'action',
      render: ({id}) => 
         <>
            <S.StyledLink to={`/user/services/${id}`}>View</S.StyledLink>
            <S.StyledLink to={`/user/services/${id}/edit`}>Edit</S.StyledLink>
            <DeleteService 
               id={id} 
               buttonType='link'
            />
         </>
   },
]


const useReduxStore = () => {
   const {services} = useSelector(state => state.servicesReducer)
   return [services]
} 


const ServicesTable = () => {
   const [services] = useReduxStore();
   const data = services.map((service, index) => ({...service, key: index}))

   return (  
      <S.Wrapper>
         <Table columns={columns} dataSource={data} />
      </S.Wrapper>
   );
}
 
export default ServicesTable;