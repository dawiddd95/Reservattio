import React from 'react';
import {Formik} from 'formik';
import { Form } from 'formik-antd'
import * as Yup from 'yup';

import {useAuthForm} from '../../../hooks/useAuthForm';
import * as S from './StyledForgotPasswordForm';

import FormAlert from '../../FormAlert/FormAlert';
import FormInput from '../../FormInput/FormInput';


const ForgotPasswordForm = () => {
   const [loading, result, submitForm] = useAuthForm('/api/auth/forgot-password')

   return (  
      <S.Wrapper>
         <FormAlert
            result={result}
         />
         <Formik
            initialValues={{
               email: '',
            }}
            validationSchema={Yup.object().shape({
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
                     label='Email'
                     name='email'
                     type='text'
                     long='true'
                  />
                  <S.StyledSubmitButton block loading={loading}>
                     Send password reset email
                  </S.StyledSubmitButton>
               </Form>
            )}
         </Formik>
      </S.Wrapper>
   );
}
 
export default ForgotPasswordForm;