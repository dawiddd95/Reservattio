import React from 'react';
import { Tag } from 'antd';

import * as S from '../../components/Employees/EmployeesTable/StyledEmployeesTable';

import DeleteEmployee from '../../components/Employees/DeleteEmployee/DeleteEmployee';
import ChangeEmployeePassword from '../../components/Employees/ChangeEmployeePassword/ChangeEmployeePassword';

export const employeesTableColumns = [
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
      title: 'Enable', 
      dataIndex: 'enable', 
      key: 'enable', 
      render: (dataIndex) => 
         <span>
            {dataIndex
               ?  <Tag color="green">Yes</Tag>
               :  <Tag color="magenta">No</Tag>
            }
         </span>
   },
   {
      title: 'Email', 
      dataIndex: 'email', 
      key: 'email', 
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
      render: ({id, email}) => 
         <>
            <S.StyledLink to={`/user/employees/${id}`}>View</S.StyledLink>
            <S.StyledLink to={`/user/employees/${id}/edit`}>Edit</S.StyledLink>
            <ChangeEmployeePassword 
               id={id}
               email={email}
            />
            <DeleteEmployee
               id={id} 
               buttonType='link'
            />
         </>
   },
]