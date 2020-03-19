import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'antd';
import {EditOutlined, DeleteOutlined, CopyOutlined} from '@ant-design/icons';

import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';

import * as S from './StyledReservationDetailsPage'

const ReservationDetailsPage = ({reservation}) => {
   return (  
      <S.Wrapper>
         <Breadcrumb 
            links={[
               {to: '/user/reservations', label: 'Home'},
               {to: '/user/reservations', label: 'Reservations'}
            ]}
            text={`Reservation: ${reservation.id}`}
         />
         <S.StyledCard title='Reservation Details' bordered>
            <S.ButtonsWrapper>
               <Link to={`/user/reservations/${reservation.id}/edit`}>
                  <Button type='primary'>
                     <EditOutlined />
                     Edit
                  </Button>
               </Link>
               <Button type='primary'>
                  <DeleteOutlined />
                  Delete
               </Button>
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
                  <S.Value>{reservation.id}</S.Value>
               </S.Item>
               <S.Item>
                  <S.Label>Client: </S.Label>
                  <S.StyledLink to={`/user/clients/${reservation.client.id}`}>
                     {reservation.client.name} {reservation.client.surname} [{reservation.client.phone}] 
                  </S.StyledLink>
               </S.Item>
               <S.Item>
                  <S.Label>Reservation Period:</S.Label>
                  <S.Value>
                     {reservation.date[0]} ~~ {reservation.date[1]}
                  </S.Value>
               </S.Item>
               <S.Item>
                  <S.Label>Reservation Time:</S.Label>
                  <S.Value>
                     {reservation.startTime} ~~ {reservation.endTime}
                  </S.Value>
               </S.Item>
               <S.Item>
                  <S.Label>Employee: </S.Label>
                  <S.StyledLink to={`/user/clients/${reservation.employee.id}`}>
                     {reservation.employee.name} {reservation.employee.surname} [{reservation.employee.type}]
                  </S.StyledLink>
               </S.Item>
               <S.Item>
                  <S.Label>Service: </S.Label>
                  <S.StyledLink to={`/user/clients/${reservation.service.id}`}>
                     {reservation.service.name} 
                  </S.StyledLink>
               </S.Item>
               <S.Item>
                  <S.Label>Status:</S.Label>
                  <S.Value>
                     {reservation.status 
                        ? <S.Status status_style={reservation.status}>{reservation.status}</S.Status>
                        : <S.NoData>No Data</S.NoData>
                     }
                  </S.Value>
               </S.Item>      
               <S.Item>
                  <S.Label>Room:</S.Label>
                  <S.Value>
                     {reservation.room 
                        ? reservation.room 
                        : <S.NoData>No Data</S.NoData>
                     }
                  </S.Value>
               </S.Item>
               <S.Item>
                  <S.Label>Notes:</S.Label>
                  <S.Value>
                     {reservation.note
                        ? reservation.note 
                        : <S.NoData>No Data</S.NoData>
                     }
                  </S.Value>
               </S.Item>
               <S.Item>
                  <S.Label>Cancellation Note:</S.Label>
                  <S.Value>
                     {reservation.cancellationNote
                        ? reservation.cancellationNote
                        : <S.NoData>No Data</S.NoData>
                     }
                  </S.Value>
               </S.Item>
               <S.Item>
                  <S.Label>Created At:</S.Label>
                  <S.Value>{reservation.createdAt}</S.Value>
               </S.Item>
               <S.Item>
                  <S.Label>Updated At:</S.Label>
                  <S.Value>{reservation.updatedAt}</S.Value>
               </S.Item>
            </S.DetailsWrapper>
         </S.StyledCard>
      </S.Wrapper>
   );
}
 
export default ReservationDetailsPage;