import React from 'react';
import {Popconfirm, Button} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

import actions from '../../app/clients/actions';

const useTableAction = () => {
   const dispatch = useDispatch()  
   const [success, setSuccess] = React.useState(false)

   const confirmDelete = async id => {
      const response = await axios.post('/api/user/clients/delete', {id: [id]}, {withCredentials: true})
      const {success} = response.data;

      if(success) {
         dispatch(actions.deleteClient([id]))
         dispatch(actions.deleteSearchClient([id]))
         setSuccess(true)
      }
   }

   return [success, confirmDelete]
}



const DeleteClient = ({id, buttonType}) => {
   const [success, confirmDelete] = useTableAction()

   return (  
      <>
         {success && <Redirect to='/user/clients' />}
         <Popconfirm 
            placement="topLeft" 
            title='Are you sure to delete this client ?' 
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
 
export default DeleteClient;