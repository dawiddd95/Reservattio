import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Tag} from 'antd';
import {EditOutlined, CopyOutlined} from '@ant-design/icons';

import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import DeleteEmployee from '../../../components/Employees/DeleteEmployee/DeleteEmployee';

import * as S from './StyledEmployeeDetailsPage'
import {reservations, employees, services, clients, profile, audit} from '../../../assets/data/selectRoles';

const EmployeeDetailsPage = ({data}) => {
   const initialArray = [];
   const roles = initialArray.concat(reservations, employees, services, clients, profile, audit)
   const filterRoles = roles.filter(role => data.roles.includes(role.value))
   const employeeRoles = filterRoles.map(role => {
      if(data.roles.includes(role.value)) {
         return role.label
      }
   })
   
   return (  
      <S.Wrapper>
         <Breadcrumb 
            links={[
               {to: '/user/employees', label: 'Home'},
               {to: '/user/employees', label: 'Employees'}
            ]}
            text={`Employee: ${data.id}`}
         />
         <S.StyledCard title='Employee Details' bordered>
            <S.ButtonsWrapper>
               <Link to={`/user/employees/${data.id}/edit`}>
                  <Button type='primary'>
                     <EditOutlined />
                     Edit
                  </Button>
               </Link>
               <DeleteEmployee
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
                  <S.Label>Surname: </S.Label>
                  <S.Value>{data.surname}</S.Value>
               </S.Item>
               <S.Item>
                  <S.Label>Phone:</S.Label>
                  <S.Value>
                     {data.phone
                        ? data.phone
                        : <S.NoData>No Data</S.NoData>
                     }
                  </S.Value>
               </S.Item>
               <S.Item>
                  <S.Label>Email:</S.Label>
                  <S.Value>
                     {data.email}
                  </S.Value>
               </S.Item>
               <S.Item>
                  <S.Label>Enable:</S.Label>
                  <S.Value>
                     {data.enable
                        ?  <Tag color="green">Yes</Tag>
                        :  <Tag color="magenta">No</Tag>
                     }
                  </S.Value>
               </S.Item>
               <S.Item>
                  <S.Label>Roles:</S.Label>
                  <S.Value>
                     {employeeRoles.map(role => <S.StyledTag color='blue'>{role}</S.StyledTag>)}
                  </S.Value>
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
 
export default EmployeeDetailsPage;