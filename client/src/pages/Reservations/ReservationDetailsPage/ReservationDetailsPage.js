import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Tag} from 'antd';
import {useSelector} from 'react-redux';
import {EditOutlined, DeleteOutlined, CopyOutlined} from '@ant-design/icons';

import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import DeleteReservation from '../../../components/Reservations/DeleteReservation/DeleteReservation';

import * as S from './StyledReservationDetailsPage'


const ReservationDetailsPage = ({data}) => {
   const {clients} = useSelector(state => state.clientsReducer)
   const {employees} = useSelector(state => state.employeesReducer)
   const {services} = useSelector(state => state.servicesReducer)

   const client = clients.filter(client => client.id === data.clientId)
   const employee = employees.filter(employee => employee.id === data.employeeId)
   const service = services.filter(service => service.id === data.serviceId)


   return (  
      <S.Wrapper>
         <Breadcrumb 
            links={[
               {to: '/user/reservations', label: 'Home'},
               {to: '/user/reservations', label: 'Reservations'}
            ]}
            text={`Reservation: ${data.id}`}
         />
         <S.StyledCard title='Reservation Details' bordered>
            <S.ButtonsWrapper>
               <Link to={`/user/reservations/${data.id}/edit`}>
                  <Button type='primary'>
                     <EditOutlined />
                     Edit
                  </Button>
               </Link>
               <DeleteReservation 
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
                  <S.Label>Client: </S.Label>
                  <S.StyledLink to={`/user/clients/${client[0].id}`}>
                     {client[0].name} {client[0].surname}
                  </S.StyledLink>
               </S.Item>
               <S.Item>
                  <S.Label>Arrival:</S.Label>
                  <S.Value>
                     {data.arrival}
                  </S.Value>
               </S.Item>
               <S.Item>
                  <S.Label>Departure:</S.Label>
                  <S.Value>
                     {data.departure}
                  </S.Value>
               </S.Item>
               <S.Item>
                  <S.Label>Employee: </S.Label>
                  <S.StyledLink to={`/user/employees/${employee[0].id}`}>
                     {employee[0].name} {employee[0].surname}
                  </S.StyledLink>
               </S.Item>
               <S.Item>
                  <S.Label>Service: </S.Label>
                  <S.StyledLink to={`/user/services/${service[0].id}`}>
                     {service[0].name} 
                  </S.StyledLink>
               </S.Item>
               <S.Item>
                  <S.Label>Status:</S.Label>
                  <S.Value font_light='true'>
                     {
                        {
                           'In Progress': <Tag color='green'>{data.status}</Tag>,
                           'Reserved': <Tag color='geekblue'>{data.status}</Tag>,
                           'Cancelled': <Tag color='red'>{data.status}</Tag>,
                           'Completed': <Tag>{data.status}</Tag>
                        }  [data.status]
                     }
                  </S.Value>
               </S.Item>      
               <S.Item>
                  <S.Label>Room:</S.Label>
                  <S.Value>
                     {data.room 
                        ? data.room 
                        : <S.NoData>No Data</S.NoData>
                     }
                  </S.Value>
               </S.Item>
               <S.Item>
                  <S.Label>Notes:</S.Label>
                  <S.Value>
                     {data.note
                        ? data.note 
                        : <S.NoData>No Data</S.NoData>
                     }
                  </S.Value>
               </S.Item>
               <S.Item>
                  <S.Label>Cancellation Note:</S.Label>
                  <S.Value>
                     {data.cancellationNote
                        ? data.cancellationNote
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
 
export default ReservationDetailsPage;