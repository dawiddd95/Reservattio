import React from 'react';
import {Formik} from 'formik';
import { Input, ResetButton, SubmitButton } from 'formik-antd';
import { UndoOutlined, SearchOutlined } from '@ant-design/icons';

import * as S from './StyledSearchServicesForm';


const useForm = () => {
   const submitForm = values => {
      console.log(values)
   }

   return [submitForm]
}



const SearchServicesForm = () => {
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
                        Price From:
                     </S.Label>
                     <Input 
                        name='priceFrom' 
                        type='number' 
                     />
                  </S.FieldWrapper>
                  <S.FieldWrapper>
                     <S.Label>
                        Price To:
                     </S.Label>
                     <Input 
                        name='priceTo' 
                        type='number' 
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
 
export default SearchServicesForm;