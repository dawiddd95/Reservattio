import * as Yup from 'yup'


const updateUserValidation = Yup.object().shape({
   name: Yup
      .string()
      .min(3),
   surname: Yup
      .string()
      .min(3),
   email: Yup
      .string()
      .email(),
   password: Yup
      .string()
      .min(8)
      .matches(/^(?=.*[A-Z])/)
      .matches(/^(?=.*[0-9])/)
      .matches(/^(?=.*[!@#$%^&*()])/),
})

export default updateUserValidation