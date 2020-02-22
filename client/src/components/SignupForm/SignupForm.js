import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { Form, Input, InputNumber, Checkbox, SubmitButton } from 'formik-antd'
import * as S from './StyledSignupForm';

const SignupForm = () => {
   return (  
      <Formik
         initialValues={{
            name: '',
            surname: '',
            email: '',
            password: '',
            confirmPassword: '',
            active: false
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

         }}
      >
         {({handleSubmit}) => (
            <S.Wrapper>
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
                     <Input 
                        //onInput={handleOnInput}
                        name='email' 
                        type='text' 
                        placeholder='Email' 
                     />
                     {/* <S.Error>{error}</S.Error> */}
                  </S.FieldWrapper>
                  <S.FieldWrapper>
                     <Input 
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
                     <Input 
                        name='confirmPassword' 
                        type='password' 
                        placeholder='Confirm password' 
                     />
                     <S.StyledErrorMessage 
                        name='confirmPassword' 
                        component='p' 
                     />
                  </S.FieldWrapper>        
                  {/* <S.Button type='submit' disabled={loading}>
                     Sign up
                     {loading && <WaitingSmallSpinner />}
                  </S.Button> */}




                  {/* Ten link nie moze tutaj byc */}
                  {/* <S.LinkWrapper>
                     <S.StyledLink to='/auth/login'>
                        Already have an account? Log in.
                     </S.StyledLink>
                  </S.LinkWrapper> */}
               </Form>
            </S.Wrapper>
         )}
      </Formik>
   );
}
 
export default SignupForm;