import React from 'react';
import {Popconfirm, Button} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {Redirect} from 'react-router-dom';

import actions from '../../../app/reservations/actions';

const useTableAction = () => {
   const dispatch = useDispatch()  
   const [success, setSuccess] = React.useState(false)

   const confirmDelete = async id => {
      const response = await axios.post('/api/user/reservations/delete', {id: [id]}, {withCredentials: true})
      const {success} = response.data;

      if(success) {
         dispatch(actions.deleteReservation([id]))
         dispatch(actions.deleteSearchReservation([id]))
         setSuccess(true)
      }
   }

   return [success, confirmDelete]
}



const DeleteReservation = ({id, buttonType}) => {
   const [success, confirmDelete] = useTableAction()

   return (  
      <>
         {success && <Redirect to='/user/reservations' />}
         <Popconfirm 
            placement="topLeft" 
            title='Are you sure to delete this reservation ?' 
            onConfirm={() => confirmDelete(id)} 
            okText='Yes' 
            cancelText='No'
         >
            <Button type={buttonType}>
               {buttonType === 'primary' && <DeleteOutlined />}
               Delete
            </Button>
         </Popconfirm>
      </>
   );
}
 
export default DeleteReservation;