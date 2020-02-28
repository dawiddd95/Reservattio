import * as Yup from 'yup'

const updateReservationValidation = Yup.object().shape({
   id: Yup
      .number()
      .required('ID is required'),
   client: Yup
      .string(),
   room: Yup
      .string(),
   status: Yup
      .string(),
   reservationStartDate: Yup
      .string()
      .required('Reservation start date is required'),
   reservationStartTime: Yup
      .string()
      .required('Reservation start time is required'),
   reservationEndDate: Yup
      .string()
      .required('Reservation end date is required'),
   reservationEndTime: Yup
      .string()
      .required('Reservation end time is required'),
   notes: Yup
      .string(),
   employeeNotes: Yup
      .string(),
   cancellationNotes: Yup
      .string()
})

export default updateReservationValidation