import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { Form, Checkbox, SubmitButton } from 'formik-antd'
import * as S from './StyledManagerLoginForm';


// const useLogin = () => {
//    const [mutation, { loading, error, data }] = useMutation(LOGIN_USER_MUTATION);
//    const [isSubmit, setIsSubmit, handleOnInput] = useAuthForm();
//    const [checked, setChecked] = React.useState(false);
   
//    const handleOnChange = () => {
//       setChecked(!checked) 
//    }

//    const handleOnSubmit = values => {
//       setIsSubmit(true)
//       if(checked) localStorage.setItem('user', values.email)
//    }

//    if(data) {
//       localStorage.setItem('token', data.loginUser.token);  
//       sessionStorage.setItem('session', true);
//       return <Redirect to='/user/reservations' />
//    }
// }


const ManagerLoginForm = () => {
   return (  
      <Formik
         initialValues={{
            email: localStorage.getItem('user') || '',
            password: ''
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
            //handleOnSubmit(values)
            console.log(values)
         }}     
      >
         {({handleSubmit}) => (
            <S.Wrapper>
               <Form onSubmit={handleSubmit}>
                  <S.FieldWrapper>
                     <S.StyledInput 
                        name='email' 
                        type='text' 
                        placeholder='Email' 
                        //onInput={handleOnInput}
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
                        //onInput={handleOnInput}
                     />
                     <S.StyledErrorMessage 
                        name='password' 
                        component='p' 
                     />
                     {/* <S.Error>
                        {err}
                     </S.Error> */}
                  </S.FieldWrapper>
                  <S.CheckboxWrapper>
                     <Checkbox name='remember-me'>Remember me</Checkbox>
                     <S.StyledLink to='/auth/forgot-password'>
                        Forgot password
                     </S.StyledLink>
                  </S.CheckboxWrapper>
                  <S.SubmitButtonWrapper>
                     <SubmitButton block>
                        Sign in
                     </SubmitButton>
                  </S.SubmitButtonWrapper>
               </Form>
            </S.Wrapper>
         )}
      </Formik>
   );
}

export default ManagerLoginForm;

// interface FormValues {
//    email: string
//    password: string
// }

// interface ManagerLoginFormProps {
//    submit: (values: FormValues) => Promise<FormikErrors<FormValues>>
// }

// const FormItem = Form.Item;



// const ManagerLoginForm: React.SFC<FormikProps<FormValues> & ManagerLoginFormProps> = ({
//    values, handleChange, handleBlur, handleSubmit
// }) => {
//    return (
//       <form 
//          onSubmit={handleSubmit}
//       >
//          <Form.Item>
//             <Input
//                name='email'
//                value={values.email}
//                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                placeholder='Email'
//                onChange={handleChange}
//                onBlur={handleBlur}
//             />
//          </Form.Item>
//          <Form.Item>
//             <Input   
//                name='password'
//                value={values.password}
//                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                type='password'
//                placeholder='Password'
//                onChange={handleChange}
//                onBlur={handleBlur}
//             />
//          </Form.Item>
//          <Form.Item>
//             <Checkbox>Remember me</Checkbox>
//             <button type="submit">
//                Log in
//             </button>
//             Or <a href="">register now!</a>
//          </Form.Item>
//       </form>
//    );
// }


// const ManagerLoginFormWrapper = withFormik<ManagerLoginFormProps, FormValues>({
//    mapPropsToValues: () => ({email: '', password: ''}),
//    handleSubmit: async (values, {props, setErrors, setSubmitting}) => {
//       const errors = await props.submit(values);
//       if(errors) {
//          setErrors(errors)
//       }
//    }
// })(ManagerLoginForm);
  
// export default ManagerLoginFormWrapper;