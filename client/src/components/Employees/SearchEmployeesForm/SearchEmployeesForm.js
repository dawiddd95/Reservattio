import React from 'react';
import axios from 'axios';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import { Input, ResetButton, SubmitButton } from 'formik-antd';
import { UndoOutlined, SearchOutlined } from '@ant-design/icons';

import * as S from './StyledSearchEmployeesForm';
import actions from '../../../app/employees/actions';

import SelectEnable from '../SelectEnable/SelectEnable';


const useForm = () => {
   const dispatch = useDispatch();

   const submitForm = async values => {
      dispatch(actions.loadingEmployees(true))

      const response = await axios.post(`/api/user/employees/search`, values, {withCredentials: true})
      const {data} = response.data;

      if(data) dispatch(actions.searchEmployees(data))

      dispatch(actions.loadingEmployees(false))
      dispatch(actions.isSearchingEmployees(true))
   }

   return [submitForm]
}



const SearchEmployeesForm = () => {
   const {loading} = useSelector(state => state.employeesReducer)
   const [submitForm] = useForm();

   return (
      <S.Wrapper> 
         <Formik
            initialValues={{
               id: '',
               name: '',
               surname: '',
               phone: '',
               email: '',
               enable: 'all',
            }}
            onSubmit={values => {      
               submitForm(values)   
            }}
         >
            {({handleSubmit}) => (
               <S.StyledForm onSubmit={handleSubmit}>
                  <S.FieldWrapper>
                     <S.Label>
                        Id:
                     </S.Label>
                     <Input 
                        name='id' 
                        type='number' 
                     />
                  </S.FieldWrapper>
                  <S.FieldWrapper>
                     <S.Label>
                        Name:
                     </S.Label>
                     <Input 
                        name='name' 
                        type='text' 
                     />
                  </S.FieldWrapper>
                  <S.FieldWrapper>
                     <S.Label>
                        Phone:
                     </S.Label>
                     <Input 
                        name='phone' 
                        type='text' 
                     />
                  </S.FieldWrapper>
                  <S.FieldWrapper>
                     <S.Label>
                        Surname:
                     </S.Label>
                     <Input 
                        name='surname' 
                        type='text' 
                     />
                  </S.FieldWrapper>
                  <S.FieldWrapper>
                     <S.Label>
                        Email:
                     </S.Label>
                     <Input 
                        name='email' 
                        type='text' 
                     />
                  </S.FieldWrapper>
                  <SelectEnable />
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
 
export default SearchEmployeesForm;