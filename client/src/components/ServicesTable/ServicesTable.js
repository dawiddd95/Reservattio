import React from 'react';
import {Button, Table, Tag} from 'antd';
import { UndoOutlined } from '@ant-design/icons';
import {useDispatch, useSelector} from 'react-redux';

import * as S from './StyledServicesTable';
import actions from '../../app/services/actions';

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


const useTable = () => {
   const dispatch = useDispatch()
   const [isReloading, setIsReloading] = React.useState(false)

   const reloadData = () => {
      setIsReloading(true)
      dispatch(actions.isSearchingServices(false))
      setIsReloading(false)
   }

   return [isReloading, reloadData]
}


const ServicesTable = () => {
   const [isReloading, reloadData] = useTable()
   const {loading, services, isSearching, searchedServices} = useSelector(state => state.servicesReducer)
   const data = !isSearching 
      ?  services.map((service, index) => ({...service, key: index}))
      :  searchedServices.map((service, index) => ({...service, key: index}))

   return (  
      <S.Wrapper>
         <S.ReloadWrapper>
            <Button type='primary' disabled={!isSearching} loading={isReloading} onClick={reloadData}>
               Reload
               <UndoOutlined />
            </Button>
            {!isSearching 
               ?  <S.P>You now see all Services.</S.P> 
               :  <S.P>You now see only searched Services. Please click reload button, to see all services again.</S.P>
            }
         </S.ReloadWrapper>
         <Table 
            columns={columns} 
            dataSource={data} 
            loading={loading}
         />
      </S.Wrapper>
   );
}
 
export default ServicesTable;