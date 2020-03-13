import React from 'react';

import * as S from '../../components/ClientsTable/StyledClientsTable';

import DeleteClient from '../../components/DeleteClient/DeleteClient';

export const clientsTableColumns = [
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
      title: 'Surname', 
      dataIndex: 'surname', 
      key: 'surname', 
      sorter: (a, b) => a.surname.toLowerCase().trim().localeCompare(b.surname.toLowerCase().trim()),
      sortDirections: ['descend', 'ascend']
   },
   { 
      title: 'Phone', 
      dataIndex: 'phone', 
      key: 'phone', 
      sorter: (a, b) => a.phone.trim().localeCompare(b.phone.trim()),
      sortDirections: ['descend', 'ascend']
   },
   { 
      title: 'Created At', key: 'createdAt', dataIndex: 'createdAt',
      sorter: (a, b) => a.createdAt.trim().localeCompare(b.createdAt.trim()),
      sortDirections: ['descend', 'ascend']
   },
   { 
      title: 'Action', 
      key: 'action',
      render: ({id}) => 
         <>
            <S.StyledLink to={`/user/clients/${id}`}>View</S.StyledLink>
            <S.StyledLink to={`/user/clients/${id}/edit`}>Edit</S.StyledLink>
            <DeleteClient 
               id={id} 
               buttonType='link'
            />
         </>
   },
]