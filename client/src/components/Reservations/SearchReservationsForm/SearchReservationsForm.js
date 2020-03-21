import React from 'react';
import axios from 'axios';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {ResetButton, SubmitButton} from 'formik-antd';
import { UndoOutlined, SearchOutlined } from '@ant-design/icons';
import moment from 'moment';

import * as S from './StyledSearchReservationsForm';
import actions from '../../../app/reservations/actions';

import SelectClient from '../SelectClient/SelectClient';
import RangeDatePicker from '../RangeDatePicker/RangeDatePicker';
import SelectEmployee from '../SelectEmployee/SelectEmployee';
import SelectService from '../SelectService/SelectService';
import FormInput from '../../FormInput/FormInput';
import SelectStatus from '../SelectStatus/SelectStatus';


const useForm = () => {
   const dispatch = useDispatch();

   const submitForm = async values => {
      dispatch(actions.loadingReservations(true))

      const date = values.date !== undefined
         ? 
            [
               moment(values.date[0]._d).format('YYYY-MM-DD HH:mm'), 
               moment(values.date[1]._d).format('YYYY-MM-DD HH:mm')
            ]
         :  undefined

      const formValues = {...values, date}

      const response = await axios.post('/api/user/reservations/search', formValues, {withCredentials: true})
      const {data} = response.data;

      if(data) dispatch(actions.searchReservations(data))

      dispatch(actions.loadingReservations(false))
      dispatch(actions.isSearchingReservations(true))
   }

   return [submitForm]
}



const SearchReservationsForm = () => {
   const {loading} = useSelector(state => state.reservationsReducer)
   const [submitForm] = useForm();
  
   return (
      <S.Wrapper> 
         <Formik
            initialValues={{
               id: '', 
               date: undefined, 
               room: '', 
               status: undefined,
               clientId: undefined,
               employeeId: undefined,
               serviceId: undefined,
            }}
            validationSchema={Yup.object().shape({
               date: Yup
                  .array()
                  .notRequired(),
               room: Yup
                  .string()
                  .notRequired(),
               status: Yup
                  .string()
                  .oneOf(['Reserved', 'In Progress', 'Cancelled', 'Completed'], 'Must be correct value')
                  .notRequired(),
               clientId: Yup
                  .string()
                  .notRequired(),
               employeeId: Yup
                  .string()
                  .notRequired(),
               serviceId: Yup
                  .string()
                  .notRequired(),
            })}
            onSubmit={values => {      
               submitForm(values)   
            }}
         >
            {({handleSubmit}) => (
               <S.StyledForm onSubmit={handleSubmit}>
                  <FormInput 
                     label='Id'
                     name='id'
                     type='text'
                  />
                  <SelectEmployee name='employeeId' />
                  <RangeDatePicker name='date' label='Arrival' />
                  <SelectClient name='clientId' />
                  <FormInput 
                     label='Room'
                     name='room'
                     type='text'
                  />
                  <SelectService name='serviceId' />
                  <SelectStatus name='status' />
                  <S.ButtonsWrapper>
                     <SubmitButton loading={loading}>
                        Search
                        <SearchOutlined />
                     </SubmitButton>
                     <ResetButton>
                        Reset
                        <UndoOutlined />
                     </ResetButton>
                  </S.ButtonsWrapper>
               </S.StyledForm>
            )}
         </Formik>
      </S.Wrapper>
   )
}
 
export default SearchReservationsForm;