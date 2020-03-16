import React from 'react';
import axios from 'axios';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { Form, SubmitButton, ResetButton } from 'formik-antd';
import { UndoOutlined, SaveOutlined } from '@ant-design/icons';
import moment from 'moment';

import * as S from './StyledNewReservationForm';

import SelectClient from '../SelectClient/SelectClient';
import RangeDatePicker from '../RangeDatePicker/RangeDatePicker';
import SelectEmployee from '../SelectEmployee/SelectEmployee';
import SelectService from '../SelectService/SelectService';
import FormInput from '../FormInput/FormInput';
import SelectStatus from '../SelectStatus/SelectStatus';
import FormTextArea from '../FormTextArea/FormTextArea';


const useForm = () => {
   const [loading, setLoading] = React.useState(false)
   const [result, setResult] = React.useState({})

   const submitForm = async values => {
      setLoading(true)

      const date = [
         moment(values.date[0]._d).format('YYYY-MM-DD'), 
         moment(values.date[1]._d).format('YYYY-MM-DD')
      ]

      const formValues = {...values, date}

      const response = await axios.post('/api/user/reservations/new', formValues, {withCredentials: true})

      setResult(response.data)
      setLoading(false)
   }

   return [submitForm]
}



const NewReservationForm = () => {
   const [submitForm] = useForm();

   return (
      <S.Wrapper> 
         <Formik
            initialValues={{
               date: '', 
               startTime: '',
               endTime: '',
               room: '', 
               status: '',
               clientId: '',
               employeeId: '',
               serviceId: '',
               note: '', 
               cancellationNote: '',
            }}
            validationSchema={Yup.object().shape({
               date: Yup
                  .array()
                  .required('Date is required'),
               startTime: Yup
                  .string()
                  .required('Reservation start time is required')
                  .matches(/^(0?[1-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, 'Must be correct format HH:mm, e.g 10:05'),
               endTime: Yup
                  .string()
                  .required('Reservation end time is required')
                  .matches(/^(0?[1-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, 'Must be correct format HH:mm, e.g 10:05'),
               room: Yup
                  .string()
                  .notRequired(),
               status: Yup
                  .string()
                  .oneOf(['Reserved', 'In Progress', 'Cancelled', 'Completed'], 'Must be correct value')
                  .required('Status is required'),
               clientId: Yup
                  .string()
                  .required('Client is required'),
               employeeId: Yup
                  .string()
                  .required('Employee is required'),
               serviceId: Yup
                  .string()
                  .required('Service is required'),
               note: Yup
                  .string()
                  .notRequired(),
               cancellationNote: Yup
                  .string()
                  .notRequired(),
            })}
            onSubmit={values => {      
               submitForm(values)   
            }}
         >
            {({handleSubmit}) => (
               <Form onSubmit={handleSubmit}>
                  <SelectClient />
                  <RangeDatePicker />
                  <FormInput 
                     label='Start Time'
                     name='startTime'
                     type='text'
                  />
                  <FormInput 
                     label='End Time'
                     name='endTime'
                     type='text'
                  />
                  {/* Wszystkie te selecty mozna latwo reuzyc, pobieramy w formie ze selectora potrzebne dane i wrzucamy do selecta jako propsy */}
                  <SelectEmployee />
                  <SelectService />
                  <FormInput 
                     label='Room'
                     name='room'
                     type='text'
                  />
                  <SelectStatus />
                  <FormTextArea 
                     label='Note'
                     name='note'
                     placeholder='Note regarding the visit'
                  />
                  <FormTextArea 
                     label='Cancellation Note'
                     name='cancellationNote'
                     placeholder='Note regarding the cancellation of a visit'
                  />
                  <S.ButtonsWrapper>
                     <SubmitButton>  
                        {/* loading={loading}> */}
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
   )
}
 
export default NewReservationForm;