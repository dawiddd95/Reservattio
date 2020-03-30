import React from 'react';
import {Modal, Popconfirm, Button} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {Redirect} from 'react-router-dom';

import actions from '../../../app/employees/actions';

const useTableAction = () => {
   const dispatch = useDispatch()  
   const [success, setSuccess] = React.useState(false)
   const [error, setError] = React.useState(false)
   const [visibleModal, setVisibleModal] = React.useState(false)

   const confirmDelete = async id => {
      const response = await axios.post('/api/user/employees/delete', {id: [id]}, {withCredentials: true})
      const {success, error} = response.data;

      if(success) {
         dispatch(actions.deleteEmployee([id]))
         dispatch(actions.deleteSearchEmployee([id]))
         setSuccess(true)
      } else {
         setError(error)
         setVisibleModal(true)
      }
   }

   const handleOk = () => {
      setVisibleModal(false)
   }

   return [success, error, visibleModal, confirmDelete, handleOk]
}



const DeleteEmployee = ({id, buttonType}) => {
   const [success, error, visibleModal, confirmDelete, handleOk] = useTableAction()

   return (  
      <>
         {success && <Redirect to='/user/employees' />}
         <Modal
            title="Can not delete employee with assigned reservations"
            visible={visibleModal}
            footer={[
               <Button key="back" type='primary' onClick={handleOk}>
                 Ok
               </Button>
            ]}
         >
            <p>{error}</p>
         </Modal>
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