import React from 'react';
import axios from 'axios';
import {Formik} from 'formik';
import {Redirect} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';
import { Form, SubmitButton, ResetButton } from 'formik-antd';
import { UndoOutlined, SaveOutlined } from '@ant-design/icons';

import * as S from './StyledNewClientForm';
import actions from '../../../app/clients/actions';

import FormInput from '../../FormInput/FormInput';
import FormTextArea from '../../FormTextArea/FormTextArea';


const useForm = () => {
   const dispatch = useDispatch();
   const [loading, setLoading] = React.useState(false)
   const [success, setSuccess] = React.useState(false)

   const submitForm = async values => {
      setLoading(true)

      const response = await axios.post('/api/user/clients/new', values, {withCredentials: true})
      const {data} = response.data;

      if(data) {
         dispatch(actions.addClient(data))
         setSuccess(true)
      }

      setLoading(false)
   }

   return [loading, success, submitForm]
}



const NewClientForm = () => {
   const [loading, success, submitForm] = useForm();

   return (
      <>
         {success && <Redirect to='/user/clients' />}
         <S.Wrapper> 
            <Formik
               initialValues={{
                  name: '',
                  surname: '',
                  phone: '',
                  note: '', 
               }}
               validationSchema={Yup.object().shape({
                  name: Yup
                     .string()
                     .min(3, 'Client name must have at least 3 letters')
                     .required('Client name is required'),
                  surname: Yup
                     .string()
                     .min(3, 'Client surname must have at least 3 letters')
                     .required('Client surname is required'),
                  phone: Yup
                     .string()
                     .notRequired(),
                  note: Yup
                     .string()
                     .notRequired(),
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
                        label='Phone'
                        name='phone'
                        type='text'
                     />
                     <FormTextArea 
                        label='Note'
                        name='note'
                        placeholder='Note regarding the client'
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
 
export default NewClientForm;