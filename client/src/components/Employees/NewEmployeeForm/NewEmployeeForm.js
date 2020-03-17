import React from 'react';
import axios from 'axios';
import {Formik} from 'formik';
import {Redirect} from 'react-router-dom';
import * as Yup from 'yup';
import { Form, SubmitButton, ResetButton } from 'formik-antd';
import { Alert } from 'antd';
import { UndoOutlined, SaveOutlined } from '@ant-design/icons';
import {useDispatch} from 'react-redux';

import actions from '../../../app/employees/actions';
import * as S from './StyledNewEmployeeForm';

import FormInput from '../../FormInput/FormInput';
import FormTextArea from '../../FormTextArea/FormTextArea';
import SelectRoles from '../../SelectRoles/SelectRoles';
import FormSwitch from '../../FormSwitch/FormSwitch';


const useForm = () => {
   const dispatch = useDispatch();
   const [loading, setLoading] = React.useState(false)
   const [success, setSuccess] = React.useState(false)
   const [err, setErr] = React.useState(false)

   const submitForm = async values => {
      setLoading(true)
      const response = await axios.post('/api/user/employees/new', values, {withCredentials: true})
      const {data, error} = response.data;

      if(data) {
         dispatch(actions.addEmployee(data))
         setSuccess(true)
      } else {
         setErr(error)
      }
      setLoading(false)
   }
   return [loading, success, err, submitForm]
}



const NewEmployeeForm = () => {
   const [loading, success, err, submitForm] = useForm();

   return (
      <>
         {success && <Redirect to='/user/employees' />}
         <S.Wrapper> 
            {err && 
               <Alert 
                  message="Error"
                  description={err}
                  type="error"
                  style={{'width': '300px', 'margin': '0 0 20px 0'}}
                  showIcon
               />
            }
            <Formik
               initialValues={{
                  name: '',
                  surname: '',
                  phone: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
                  roles: [],
                  note: '', 
                  enable: true,
               }}
               validationSchema={Yup.object().shape({
                  name: Yup
                     .string()
                     .min(3, 'Employee name must have at least 3 letters')
                     .required('Employee name is required'),
                  surname: Yup
                     .string()
                     .min(3, 'Employee surname must have at least 3 letters')
                     .required('Employee surname is required'),
                  phone: Yup
                     .string()
                     .notRequired(),
                  email: Yup
                     .string()
                     .email('Email must be a valid email')
                     .notRequired(),
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
                  roles: Yup
                     .array().of(Yup.string())
                     .required('Roles are required'),
                  note: Yup
                     .string()
                     .notRequired(),
                  enable: Yup
                     .boolean()
                     .required('Enable status is required')
               })}
               onSubmit={values => {      
                  submitForm(values)   
               }}
            >
               {({handleSubmit}) => (
                  <Form onSubmit={handleSubmit}>
                     <FormInput 
                        label='Name'
                        name='name'
                        type='text'
                     />
                     <FormInput 
                        label='Surname'
                        name='surname'
                        type='text'
                     />
                     <SelectRoles 
                        name='roles'
                     />
                     <FormInput 
                        label='Phone'
                        name='phone'
                        type='text'
                     />
                     <FormInput 
                        label='Email'
                        name='email'
                        type='text'
                     />
                     <FormInput 
                        label='Password'
                        name='password'
                        type='password'
                     />
                     <FormInput 
                        label='Confirm Password'
                        name='confirmPassword'
                        type='password'
                     />
                     <FormTextArea 
                        label='Note'
                        name='note'
                        placeholder='Note regarding the employee'
                     />
                     <FormSwitch 
                        label='Enable Account'
                        name='enable'
                        defaultChecked={true}
                     />
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
         </S.Wrapper>
      </>
   )
}
 
export default NewEmployeeForm;