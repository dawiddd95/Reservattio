import React from 'react';
import {Formik} from 'formik';
import { Input, ResetButton, SubmitButton } from 'formik-antd';
import { UndoOutlined, SearchOutlined } from '@ant-design/icons';

import * as S from './StyledSearchClientsForm';


const useForm = () => {
   const submitForm = values => {
      console.log(values)
   }

   return [submitForm]
}



const SearchClientsForm = () => {
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
                     <SubmitButton>  
                        {/* loading={loading}> */}
                        <SearchOutlined />
                        Search
                     </SubmitButton>
                     <ResetButton>
                        <UndoOutlined />
                        Reset
                     </ResetButton>
                  </S.ButtonsWrapper>
               </S.StyledForm>
            )}
         </Formik>
      </S.Wrapper>
   )
}
 
export default SearchClientsForm;