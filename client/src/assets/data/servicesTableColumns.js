import React from 'react';

import * as S from '../../components/Services/ServicesTable/StyledServicesTable';

import DeleteService from '../../components/Services/DeleteService/DeleteService';

export const servicesTableColumns = [
   {  
      title: 'Id', 
      dataIndex: 'id', 
      key: 'id', 
      sorter: (a, b) => a.id - b.id,
      sortDirections: ['descend', 'ascend'],
      defaultSortOrder: 'ascend'
   },
   { 
      title: 'Name', 
      dataIndex: 'name', 
      key: 'name', 
      sorter: (a, b) => a.name.toLowerCase().trim().localeCompare(b.name.toLowerCase().trim()),
      sortDirections: ['descend', 'ascend']
   },
   { 
      title: 'Price', dataIndex: 'price', 
      key: 'price', 
      render: (dataIndex) => <span>${dataIndex}</span>,
      sorter: (a, b) => a.price - b.price,
      sortDirections: ['descend', 'ascend']
   },
   { 
      title: 'Created At', 
      key: 'createdAt', 
      dataIndex: 'createdAt',
      sorter: (a, b) => a.createdAt.trim().localeCompare(b.createdAt.trim()),
      sortDirections: ['descend', 'ascend']
   },
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