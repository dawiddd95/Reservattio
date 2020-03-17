import React from 'react';
import {Popconfirm, Button} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

import actions from '../../../app/employees/actions';

const useTableAction = () => {
   const dispatch = useDispatch()  
   const [success, setSuccess] = React.useState(false)

   const confirmDelete = async id => {
      const response = await axios.post('/api/user/employees/delete', {id: [id]}, {withCredentials: true})
      const {success} = response.data;

      if(success) {
         dispatch(actions.deleteEmployee([id]))
         dispatch(actions.deleteSearchEmployee([id]))
         setSuccess(true)
      }
   }

   return [success, confirmDelete]
}



const DeleteEmployee = ({id, buttonType}) => {
   const [success, confirmDelete] = useTableAction()

   return (  
      <>
         {success && <Redirect to='/user/employees' />}
         {/* To by mozna było reuzyc client, employee etc zmienic na item*/}
         <Popconfirm 
            placement="topLeft" 
            title='Are you sure to delete this employee ?' 
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
 
export default DeleteEmployee;