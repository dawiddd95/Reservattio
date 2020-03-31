import React from 'react';
import axios from 'axios';
import {Formik} from 'formik';
import {Redirect} from 'react-router-dom';
import * as Yup from 'yup';
import { Form, SubmitButton, ResetButton } from 'formik-antd';
import { UndoOutlined, SaveOutlined } from '@ant-design/icons';
import {useSelector, useDispatch} from 'react-redux';

import actions from '../../../app/account/actions';
import * as S from './StyledProfileForm';

import FormInput from '../../FormInput/FormInput';


const useForm = (id) => {
   const dispatch = useDispatch();
   const [loading, setLoading] = React.useState(false)
   const [success, setSuccess] = React.useState(false)

   const submitForm = async values => {
      setLoading(true)

      const response = await axios.post(`/api/user/profile/${id}/edit`, values, {withCredentials: true})
      const {data} = response.data;

      if(data) {
         dispatch(actions.editAccount(data))
         setSuccess(true)
      }

      setLoading(false)
   }

   return [loading, success, submitForm]
}



const ProfileForm = () => {
   const {id, email, name, surname} = useSelector(state => state.accountReducer.account)
   const [loading, success, submitForm] = useForm(id);

   return (
      <>
         {success && <Redirect to={`/user/reservations`} />}
         <S.Wrapper> 
            <Formik
               initialValues={{
                  email,
                  name,
                  surname,
               }}
               validationSchema={Yup.object().shape({
                  name: Yup
                     .string()
                     .min(3, 'Minimum 3 characters')
                     .required('Name is required'),
                  surname: Yup
                     .string()
                     .min(3, 'Minimum 3 characters')
                     .required('Surname is required'),
                  email: Yup
                     .string()
                     .email('Email must be a valid email')
                     .required('Email is required'),
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
                     <FormInput 
                        label='Email'
                        name='email'
                        type='text'
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
 
export default ProfileForm;