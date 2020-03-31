import React from 'react';
import axios from 'axios';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Redirect} from 'react-router-dom';
import { Form, Checkbox, SubmitButton } from 'formik-antd';

import * as S from './StyledManagerLoginForm';

import FormAlert from '../../FormAlert/FormAlert';
import FormInput from '../../FormInput/FormInput';

const useForm = () => {
   const [loading, setLoading] = React.useState(false)
   const [result, setResult] = React.useState({})

   const submitForm = async values => {
      setLoading(true)
      
      const response = await axios.post('/api/auth/login', values)
      const {remember, email} = values
      const {success} = response.data

      if(remember) localStorage.setItem('user', email)
      if(success) sessionStorage.setItem('session', true)

      setLoading(false)
      setResult(response.data)
   }

   return [loading, result, submitForm]
}



const ManagerLoginForm = () => {
   const [loading, result, submitForm] = useForm();

   return (  
      <S.Wrapper>
         {result.success && <Redirect to='/user/reservations' />}
         <FormAlert
            result={result}
         />
         <Formik
            initialValues={{
               email: localStorage.getItem('user') || '',
               password: '',
               remember: false
            }}
            validationSchema={Yup.object().shape({
               email: Yup
                  .string()
                  .email()
                  .required('Email is required'),
               password: Yup
                  .string()
                  .required('Password is required'),
            })}
            onSubmit={values => {
               submitForm(values)
            }}     
         >
            {({handleSubmit}) => (
               <Form onSubmit={handleSubmit}>
                  <FormInput 
                     label='Email'
                     name='email'
                     type='text'
                     long='true'
                  />
                  <FormInput 
                     label='Password'
                     name='password'
                     type='password'
                     long='true'
                  />
                  <S.CheckboxWrapper>
                     <Checkbox name='remember'>Remember me</Checkbox>
                     <S.StyledLink to='/auth/forgot-password'>
                        Forgot password
                     </S.StyledLink>
                  </S.CheckboxWrapper>
                  <S.SubmitButtonWrapper>
                     <SubmitButton block loading={loading}>
                        Log in
                     </SubmitButton>
                  </S.SubmitButtonWrapper>
               </Form>
            )}
         </Formik>
      </S.Wrapper>
   );
}

export default ManagerLoginForm;