import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { Form } from 'formik-antd';

import * as S from './StyledSignupForm';
import {useAuthForm} from '../../../hooks/useAuthForm';

import FormInput from '../../FormInput/FormInput';
import FormAlert from '../../FormAlert/FormAlert';


const SignupForm = () => {
   const [loading, result, submitForm] = useAuthForm('/api/auth/signup');
  
   return (
      <S.Wrapper> 
         <FormAlert
            result={result}
         />
         <Formik
            initialValues={{
               name: '',
               surname: '',
               email: '',
               password: '',
               confirmPassword: '',
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
                  <FormInput 
                     label='Name'
                     name='name'
                     type='text'
                     long='true'
                  />
                  <FormInput 
                     label='Surname'
                     name='surname'
                     type='text'
                     long='true'
                  />
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
                  <FormInput 
                     label='Confirm password'
                     name='confirmPassword'
                     type='password'
                     long='true'
                  />
                  <S.StyledSubmitButton block loading={loading}>
                     Sign up
                  </S.StyledSubmitButton>
               </Form>
            )}
         </Formik>
      </S.Wrapper>
   );
}
 
export default SignupForm;