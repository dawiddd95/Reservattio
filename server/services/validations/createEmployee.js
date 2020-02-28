import * as Yup from 'yup'

const createEmployeeValidation = Yup.object().shape({
   name: Yup
      .string()
      .required('Name is required'),
   surname: Yup
      .string()
      .required('Surname is required'),
   phone: Yup
      .string(),
   email: Yup
      .string(),
   active: Yup
      .boolean()
      .required('Must set value'),
   employeesAccess: Yup
      .boolean()
      .required('Must set value'),
   auditAccess: Yup
      .boolean()
      .required('Must set value'),
   clientsAccess: Yup
      .boolean()
      .required('Must set value'),
   reservationsAccess: Yup
      .boolean()
      .required('Must set value'),
   ordersAccess: Yup
      .boolean()
      .required('Must set value'),
   communicatorAccess: Yup
      .boolean()
      .required('Must set value'),
   profileAccess: Yup
      .boolean()
      .required('Must set value'),
})

export default createEmployeeValidation