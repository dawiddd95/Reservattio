import React from 'react';
import { Tag } from 'antd';

import * as S from '../../components/Reservations/ReservationsTable/StyledReservationsTable';

import DeleteReservation from '../../components/Reservations/DeleteReservation/DeleteReservation';
import ColumnEmployee from '../../components/Reservations/ColumnEmployee/ColumnEmployee';
import ColumnClient from '../../components/Reservations/ColumnClient/ColumnClient';
import ColumnService from '../../components/Reservations/ColumnService/ColumnService';

export const reservationsTableColumns = [
   {  
      width: 100,
      title: 'Id', 
      dataIndex: 'id', 
      key: 'id', 
      sorter: (a, b) => a.id - b.id,
      sortDirections: ['descend', 'ascend'],
      defaultSortOrder: 'ascend',
   },
   {
      width: 200,
      title: 'Arrival',
      dataIndex: 'arrival',
      key: 'arrival',
      sorter: (a, b) => a.arrival.trim().localeCompare(b.arrival.trim()),
      sortDirections: ['descend', 'ascend'],
      render: (dataIndex) => <span>{dataIndex}</span>
   },
   {
      width: 200,
      title: 'Departure',
      dataIndex: 'departure',
      key: 'departure',
      sorter: (a, b) => a.departure.trim().localeCompare(b.departure.trim()),
      sortDirections: ['descend', 'ascend'],
      render: (dataIndex) => <span>{dataIndex}</span>
   },
   {
      width: 220,
      title: 'Employee',
      dataIndex: 'employeeId',
      key: 'employeeId',
      render: (dataIndex) => <ColumnEmployee id={dataIndex} />
   },
   {
      width: 250,
      title: 'Service',
      dataIndex: 'serviceId',
      key: 'serviceId',
      render: (dataIndex) => <ColumnService id={dataIndex} />
   },
   {
      width: 220,
      title: 'Client',
      dataIndex: 'clientId',
      key: 'clientId',
      render: (dataIndex) => <ColumnClient id={dataIndex} />
   },
   {
      width: 120,
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      sorter: (a, b) => a.status.trim().localeCompare(b.status.trim()),
      sortDirections: ['descend', 'ascend'],
      render: (dataIndex) => {
         switch (dataIndex) {
            case 'In Progress':
               return <Tag color='green'>{dataIndex}</Tag>
            case 'Reserved':
               return <Tag color='geekblue'>{dataIndex}</Tag>
            case 'Cancelled':
               return <Tag color='red'>{dataIndex}</Tag>
            case 'Completed':
               return <Tag>{dataIndex}</Tag>
            
            default:
               return <Tag>{dataIndex}</Tag>
         }
      }
   },
   { 
      width: 120,
      title: 'Created At', key: 'createdAt', dataIndex: 'createdAt',
      sorter: (a, b) => a.createdAt.trim().localeCompare(b.createdAt.trim()),
      sortDirections: ['descend', 'ascend']
   },
   { 
      width: 220,
      title: 'Action', 
      key: 'action',
      render: ({id}) => 
         <>
            <S.StyledLink to={`/user/reservations/${id}`}>View</S.StyledLink>
            <S.StyledLink to={`/user/reservations/${id}/edit`}>Edit</S.StyledLink>
            <DeleteReservation
               id={id} 
               buttonType='link'
            />
         </>
   },
]