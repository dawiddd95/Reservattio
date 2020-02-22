import React from 'react';
import {Formik} from 'formik';
import { Form, SubmitButton } from 'formik-antd'
import { notification } from 'antd';
import * as Yup from 'yup';
import axios from 'axios';

import * as S from './StyledForgotPasswordForm';


const useForm = () => {
   const [result, setResult] = ('')

   const submitForm = (values) => {
      //axios.post()
      console.log('submitting....')
      console.log(values)
   }

   return [submitForm]
}


const ForgotPasswordForm = () => {
   const [submitForm] = useForm();

   return (  
      <Formik
         initialValues={{
            email: '',
         }}
         validationSchema={Yup.object().shape({
            email: Yup
               .string()
               .email('Invalid email')
               .required('Email is required'),
         })}
         onSubmit={values => {
            // const success = 'success'
            // const error = 'error'
            
            // notification[error]({
            //    message: 'Notification Title',
            //    description:
            //      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            // });
            submitForm(values)
         }}
      >
         {({handleSubmit}) => (
            <S.Wrapper>
               {/* Warunek pokazania tego monitu o rezultacie czy email istnieje czy nie */}
               {/* text={error 
                  ? `Sorry, we don't recognize your credentials`
                  : 'Password reset email sent successfully'
               } */}
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
                  <SubmitButton block>
                     Send password reset email
                  </SubmitButton>
               </Form>
            </S.Wrapper>
         )}
      </Formik>
   );
}
 
export default ForgotPasswordForm;