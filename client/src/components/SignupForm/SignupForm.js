import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Form, SubmitButton } from 'formik-antd';

import * as S from './StyledSignupForm';

import FormAlert from '../FormAlert/FormAlert';


const useForm = () => {
   const [loading, setLoading] = React.useState(false)
   const [result, setResult] = React.useState({})
   
   const submitForm = async values => {
      setLoading(true)
      
      const response = await axios.post('/api/auth/signup', values)
      
      setResult(response.data)
      setLoading(false)
   }
   return [loading, result, submitForm]
}



const SignupForm = () => {
   const [loading, result, submitForm] = useForm()
  
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
                  <S.FieldWrapper>
                     <S.StyledInput 
                        name='name' 
                        type='text' 
                        placeholder='Name' 
                     />
                     <S.StyledErrorMessage 
                        name='name' 
                        component='p' 
                     />
                  </S.FieldWrapper>
                  <S.FieldWrapper>
                     <S.StyledInput 
                        name='surname' 
                        type='text' 
                        placeholder='Surname' 
                     />
                     <S.StyledErrorMessage 
                        name='surname' 
                        component='p' 
                     />
                  </S.FieldWrapper>
                  <S.FieldWrapper>
                     <S.StyledInput 
                        name='email' 
                        type='text' 
                        placeholder='Email' 
                     />
                     <S.StyledErrorMessage 
                        name='email' 
                        component='p' 
                     />
                  </S.FieldWrapper>
                  <S.FieldWrapper>
                     <S.StyledInput 
                        name='password' 
                        type='password' 
                        placeholder='Password' 
                     />
                     <S.StyledErrorMessage 
                        name='password' 
                        component='p' 
                     />
                  </S.FieldWrapper>
                  <S.FieldWrapper>
                     <S.StyledInput 
                        name='confirmPassword' 
                        type='password' 
                        placeholder='Confirm password' 
                     />
                     <S.StyledErrorMessage 
                        name='confirmPassword' 
                        component='p' 
                     />
                  </S.FieldWrapper>        
                  <SubmitButton block loading={loading}>
                     Sign up
                  </SubmitButton>
               </Form>
            )}
         </Formik>
      </S.Wrapper>
   );
}
 
export default SignupForm;