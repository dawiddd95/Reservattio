import React from 'react';
import {Formik} from 'formik';
import { Form, SubmitButton } from 'formik-antd'
import * as Yup from 'yup';

import {useAuthForm} from '../../hooks/useAuthForm';
import * as S from './StyledForgotPasswordForm';

import FormAlert from '../FormAlert/FormAlert';


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
                  <S.FieldWrapper>
                     <S.StyledInput 
                        name='email' 
                        type='text' 
                        placeholder='Email' 
                     />
                     <S.StyledErrorMessage 
                        name='email' 
                        component='div' 
                     />
                  </S.FieldWrapper>
                  <SubmitButton block loading={loading}>
                     Send password reset email
                  </SubmitButton>
               </Form>
            )}
         </Formik>
      </S.Wrapper>
   );
}
 
export default ForgotPasswordForm;