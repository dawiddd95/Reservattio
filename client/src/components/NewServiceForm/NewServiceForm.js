import React from 'react';
import axios from 'axios';
import {Formik} from 'formik';
import {Redirect} from 'react-router-dom';
import * as Yup from 'yup';
import { Form, SubmitButton, ResetButton } from 'formik-antd';
import { UndoOutlined, SaveOutlined } from '@ant-design/icons';
import {useDispatch} from 'react-redux';

import actions from '../../app/services/actions';
import * as S from './StyledNewServiceForm';

import FormInput from '../FormInput/FormInput';
import FormTextArea from '../FormTextArea/FormTextArea';


const useForm = () => {
   const dispatch = useDispatch();
   const [loading, setLoading] = React.useState(false)
   const [success, setSuccess] = React.useState(false)

   const submitForm = async values => {
      setLoading(true)

      const response = await axios.post('/api/user/services/new', values, {withCredentials: true})
      const {data} = response.data;

      if(data) {
         dispatch(actions.addService(data))
         setSuccess(true)
      }

      setLoading(false)
   }

   return [loading, success, submitForm]
}



const NewServiceForm = () => {
   const [loading, success, submitForm] = useForm();

   return (
      <>
         {success && <Redirect to='/user/services' />}
         <S.Wrapper> 
            <Formik
               initialValues={{
                  name: '',
                  price: '', 
                  note: ''
               }}
               validationSchema={Yup.object().shape({
                  name: Yup
                     .string()
                     .min(3, 'Service name must have at least 3 letters')
                     .required('Service name is required'),
                  price: Yup
                     .number('Letters are not allowed')
                     .required('Service price is required'),
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
                        label='Price'
                        name='price'
                        type='number'
                     />
                     <FormTextArea 
                        label='Note'
                        name='note'
                        placeholder='Note regarding the service'
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
 
export default NewServiceForm;