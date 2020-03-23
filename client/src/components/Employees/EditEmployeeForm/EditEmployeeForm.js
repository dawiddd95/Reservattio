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
import * as S from './StyledEditEmployeeForm';

import FormInput from '../../FormInput/FormInput';
import FormTextArea from '../../FormTextArea/FormTextArea';
import SelectRoles from '../../SelectRoles/SelectRoles';
import FormSwitch from '../../FormSwitch/FormSwitch';


const useForm = (id) => {
   const dispatch = useDispatch();
   const [loading, setLoading] = React.useState(false)
   const [success, setSuccess] = React.useState(false)
   const [err, setErr] = React.useState(false)

   const submitForm = async values => {
      setLoading(true)
      const response = await axios.post(`/api/user/employees/${id}/edit`, values, {withCredentials: true})
      const {data, error} = response.data;

      if(data) {
         dispatch(actions.editEmployee(data))
         dispatch(actions.editSearchEmployee(data))
         setSuccess(true)
      } else {
         setErr(error)
      }
      setLoading(false)
   }
   return [loading, success, err, submitForm]
}



const EditEmployeeForm = ({data}) => {
   const [loading, success, err, submitForm] = useForm(data.id);
   const {name, surname, phone, email, roles, note, enable, type} = data;

   return (
      <>
         {success && <Redirect to={`/user/employees/${data.id}`} />}
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
                  name,
                  surname,
                  phone,
                  email,
                  roles,
                  note, 
                  enable,
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
                        initialRoles={roles}
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
 
export default EditEmployeeForm;