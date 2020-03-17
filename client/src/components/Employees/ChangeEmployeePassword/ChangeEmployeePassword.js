import React from 'react';
import { Modal, Alert, Button, notification } from 'antd';
import axios from 'axios';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { Form, Input, SubmitButton, ResetButton } from 'formik-antd';
import { UndoOutlined, SaveOutlined } from '@ant-design/icons';

import * as S from './StyledChangeEmployeePassword';


const useModal = (id) => {
   const [visible, setVisible] = React.useState(false)
   const [loading, setLoading] = React.useState(false)
   const [error, setError] = React.useState(false)

   const showModal = () => {
      setError(false)
      setVisible(true)
   }

   const showNotification = () => {
      notification.success({message: 'Password change successfully', placement: 'topRight'})
   }

   const submitForm = async values => {
      setLoading(true)
      try {
         const response = await axios.post(`/api/user/employees/${id}/change-password`, values, {withCredentials: true})
         const {success} = response.data
         if(success) {
            setError(false)
            setVisible(false)
            showNotification()
         } 
      } catch(err) {
         setError(true)
      }
      setLoading(false)
   }

   const handleCancel = e => {
      setError(false)
      setVisible(false)
   }

   return [visible, loading, error, showModal, submitForm, handleCancel]
}



const ChangeEmployeePassword = ({id, email}) => {
   const [visible, loading, error, showModal, submitForm, handleCancel] = useModal(id);

   return (  
      <>
         <Button type='link' onClick={showModal}>
            Change password
         </Button>
         <Modal
            title='Change password'
            footer={null}
            visible={visible}
            onCancel={handleCancel}
         >
            {error && 
               <Alert
                  message='Something goes wrong...'
                  description='Can not change password right now.'
                  type='error'
                  showIcon
                  style={{'margin': '0 0 20px 0'}}
               />
            }
            <S.DataWrapper>
               <S.Label>
                  Id:
               </S.Label>
               {id}
            </S.DataWrapper>
            <S.DataWrapper>
               <S.Label>
                  Login:
               </S.Label>
               {email}
            </S.DataWrapper>
            <S.FormWrapper> 
               <Formik
                  initialValues={{
                     password: '',
                     confirmPassword: ''
                  }}
                  validationSchema={Yup.object().shape({
                     password: Yup
                        .string()
                        .min(8, 'Minimum 8 characters')
                        .matches(/^(?=.*[A-Z])/, 'Must contain at least one uppercase character')
                        .matches(/^(?=.*[0-9])/, 'Must contain at least one numeric character')
                        .matches(/^(?=.*[!@#$%^&*()])/, 'Must contain at least one special character')
                        .required('Password is required'),
                     confirmPassword: Yup
                        .string()
                        .required('Password must match')
                        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
                  })}
                  onSubmit={values => {      
                     submitForm(values)   
                  }}
               >
                  {({handleSubmit}) => (
                     <Form onSubmit={handleSubmit}>
                        <S.FormInputWrapper>
                           <S.Label>
                              New Password:
                           </S.Label>
                           <Input.Password name='password' />
                           <S.StyledErrorMessage 
                              name='password'
                              component='p'
                           />
                        </S.FormInputWrapper>
                        <S.FormInputWrapper>
                           <S.Label>
                              Confirm Password:
                           </S.Label>
                           <Input.Password name='confirmPassword' />
                           <S.StyledErrorMessage 
                              name='confirmPassword'
                              component='p'
                           />
                        </S.FormInputWrapper>
                        <S.ButtonsWrapper>
                           <SubmitButton loading={loading}>
                              Save
                              <SaveOutlined />
                           </SubmitButton>
                           <ResetButton>
                              Reset
                              <UndoOutlined />
                           </ResetButton>
                        </S.ButtonsWrapper>
                     </Form>
                  )}
               </Formik>
            </S.FormWrapper>
         </Modal>
      </>
   );
}
 
export default ChangeEmployeePassword;