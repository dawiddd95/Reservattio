import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Alert } from 'antd';
import { ResetButton, SubmitButton } from 'formik-antd';
import { UndoOutlined, SearchOutlined } from '@ant-design/icons';
import {useDispatch, useSelector} from 'react-redux';

import * as S from './StyledSearchServicesForm';
import actions from '../../../app/services/actions';

import FormInput from '../../FormInput/FormInput';


const useForm = () => {
   const dispatch = useDispatch();

   const submitForm = async values => {
      dispatch(actions.loadingServices(true))

      const response = await axios.post(`/api/user/services/search`, values, {withCredentials: true})
      const {data} = response.data;

      if(data) dispatch(actions.searchServices(data))

      dispatch(actions.loadingServices(false))
      dispatch(actions.isSearchingServices(true))
   }

   return [submitForm]
}


const SearchServicesForm = () => {
   const {loading} = useSelector(state => state.servicesReducer)
   const [submitForm] = useForm();

   return (
      <S.Wrapper> 
         <Formik
            initialValues={{
               id: '',
               name: '', 
               priceFrom: '',
               priceTo: '',
            }}
            validationSchema={Yup.object().shape({
               priceFrom: Yup
                  .number('Letters are not allowed')
                  .lessThan(2147483647, 'Can not be higher or equal 21474836467')
                  .positive('Price can not be negative number or 0'),
               priceTo: Yup
                  .number('Letters are not allowed')
                  .lessThan(2147483647, 'Can not be higher or equal 21474836467')
                  .positive('Price can not be negative number or 0')
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
                     type='number'
                  />
                  <FormInput 
                     label='Name'
                     name='name'
                     type='text'
                  />
                  <FormInput 
                     label='Price From'
                     name='priceFrom'
                     type='number'
                  />
                  <FormInput 
                     label='Price To'
                     name='priceTo'
                     type='number'
                  />
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
 
export default SearchServicesForm;