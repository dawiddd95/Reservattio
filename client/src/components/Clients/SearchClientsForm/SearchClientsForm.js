import React from 'react';
import axios from 'axios';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import { Input, ResetButton, SubmitButton } from 'formik-antd';
import { UndoOutlined, SearchOutlined } from '@ant-design/icons';

import * as S from './StyledSearchClientsForm';
import actions from '../../../app/clients/actions';


const useForm = () => {
   const dispatch = useDispatch();

   const submitForm = async values => {
      dispatch(actions.loadingClients(true))

      const response = await axios.post(`/api/user/clients/search`, values, {withCredentials: true})
      const {data} = response.data;

      if(data) dispatch(actions.searchClients(data))

      dispatch(actions.loadingClients(false))
      dispatch(actions.isSearchingClients(true))
   }

   return [submitForm]
}



const SearchClientsForm = () => {
   const {loading} = useSelector(state => state.clientsReducer)
   const [submitForm] = useForm();

   return (
      <S.Wrapper> 
         <Formik
            initialValues={{
               id: '',
               name: '', 
               surname: '', 
               phone: '', 
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
 
export default SearchClientsForm;