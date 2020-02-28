import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { Form, SubmitButton } from 'formik-antd';
import * as S from './StyledEmployeeLoginForm'

const EmployeeLoginForm = () => {
   return (  
      <Formik
         initialValues={{
            username: '',
            password: ''
         }}
         validationSchema={Yup.object().shape({
            username: Yup
               .string()
               .required('Email is required'),
            password: Yup
               .string()
               .required('Password is required'),
         })}
         onSubmit={values => {
            //handleOnSubmit(values)
            console.log(values)
         }}     
      >
         {({handleSubmit}) => (
            <S.Wrapper>
               <Form onSubmit={handleSubmit}>
                  <S.FieldWrapper>
                     <S.StyledInput 
                        name='username' 
                        type='text' 
                        placeholder='Username' 
                     />
                     <S.StyledErrorMessage 
                        name='username' 
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
                  <S.SubmitButtonWrapper>
                     <SubmitButton block>
                        Log in
                     </SubmitButton>
                  </S.SubmitButtonWrapper>
               </Form>
            </S.Wrapper>
         )}
      </Formik>
   );
}
 
export default EmployeeLoginForm;