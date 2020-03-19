import React from 'react';
import {Formik} from 'formik';
import { Input, ResetButton, SubmitButton, Select as FormSelect, DatePicker} from 'formik-antd';
import { Select } from 'antd';
import { UndoOutlined, SearchOutlined } from '@ant-design/icons';
import moment from 'moment';

import * as S from './StyledSearchReservationsForm';
import SelectClient from '../SelectClient/SelectClient';

const { Option, OptGroup } = Select;
const { RangePicker } = DatePicker;


const fakeEmployees = [
   {id: 62735, name: 'Natalia', surname: 'Stąpor', type: 'Employee'},
   {id: 1345232234, name: 'Justyna', surname: 'Jabłońska', type: 'Employee'}
]

const fakeManager = [
   {id: 16244, name: 'Dawid', surname: 'Łychoński', type: 'Manager'},
]

const fakeServices = [
   {id: 257, name: 'Diagnoza'},
   {id: 2354, name: 'Fizjoterapia'},
   {id: 234, name: 'Masaż'}
]

const fakeClients = [
   {id: 1212132, name: 'Katarzyna', surname: 'Małek', phone: '735 675 123'},
   {id: 653, name: 'Kamil', surname: 'Miller', phone: '727 152 763'},
   {id: 63, name: 'Roksana', surname: 'Mielc', phone: '947 363 937'}
]


// ////////////////////////////////////////////////////////////////////////////////

const useForm = () => {
   const submitForm = values => {
      const formValues = {
         ...values, 
         date: [
            moment(values.date[0]._d).format('YYYY-MM-DD'), 
            moment(values.date[1]._d).format('YYYY-MM-DD')
         ]
      }

      console.log(formValues)
   }

   return [submitForm]
}


const SearchReservationsForm = () => {
   const [submitForm] = useForm();
  
   return (
      <S.Wrapper> 
         <Formik
            initialValues={{
               id: '', 
               date: '', 
               room: '', 
               status: '',
               client: '',
               employee: '',
               service: '',
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
                        type='text' 
                     />
                  </S.FieldWrapper>
                  <S.FieldWrapper>
                     <S.Label>
                        Employee:
                     </S.Label>
                     <FormSelect name='employee'>
                        <OptGroup label="Manager">
                           {fakeManager.map(manager => 
                              <Option value={manager.id} key={manager.id}>
                                 {manager.name} {manager.surname} [{manager.type}]
                              </Option>
                           )}
                        </OptGroup>
                        <OptGroup label="Employees">
                           {fakeEmployees.map(employee =>
                              <Option value={employee.id} key={employee.id}>
                                 {employee.name} {employee.surname} [{employee.type}]
                              </Option>
                           )}     
                        </OptGroup>
                     </FormSelect>
                  </S.FieldWrapper>
                  <S.FieldWrapper>
                     <S.Label>
                        Status:
                     </S.Label>
                     <FormSelect name='status'>
                        <Option value='Reserved'>Reserved</Option>
                        <Option value='In Progress'>In Progress</Option>
                        <Option value='Cancelled'>Cancelled</Option>
                        <Option value='Completed'>Completed</Option>
                     </FormSelect>
                  </S.FieldWrapper>
                  <SelectClient />
                  <S.FieldWrapper>
                     <S.Label>
                        Room:
                     </S.Label>
                     <Input 
                        name='room' 
                        type='text' 
                     />
                  </S.FieldWrapper>
                  <S.FieldWrapper>
                     <S.Label>
                        Service:
                     </S.Label>
                     <FormSelect name='service'>
                        {fakeServices.map(service =>
                           <Option value={service.id} key={service.id}>
                              {service.name}
                           </Option>
                        )}     
                     </FormSelect>
                  </S.FieldWrapper>
                  <S.FieldWrapper>
                     <S.Label>
                        Period:
                     </S.Label>
                     <RangePicker name='date' />
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
 
export default SearchReservationsForm;