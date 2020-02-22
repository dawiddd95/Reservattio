export const privilegesData = [
   {value: 'employeesAccess', label: 'Employees'},
   {value: 'auditAccess', label: 'Audit Logs',},
   {value: 'clientsAccess', label: 'Clients'},
   {value: 'reservationsAccess', label: 'Reservations'},
   {value: 'communicatorAccess', label: 'Communicator'},
   {value: 'profileAccess', label: 'Profile'},
];

export const activeData = [
   {value: true, label: 'Yes'},
   {value: false, label: 'No'}
]

export const statusData = [
   {value: 'Booked', label: 'Booked'},
   {value: 'In Progress', label: 'In Progress'},
   {value: 'Cancelled', label: 'Cancelled'},
   {value: 'Completed', label: 'Completed'}
]

export const reservationsTableSortBy = [
   {value: 'id', label: 'Reservation ID'},
   {value: 'client', label: 'Client'},
   {value: 'room', label: 'Room'},
   {value: 'status', label: 'Status'},
   {value: 'reservationStartDate', label: 'Start Reservation Date'},
   {value: 'reservationStartTime', label: 'Start Reservation Time'},
   {value: 'reservationEndDate', label: 'End Reservation Date'},
   {value: 'reservationEndTime', label: 'End Reservation Time'},
   {value: 'createdAt', label: 'Created At Date'},
   {value: 'updatedAt', label: 'Updated At Date'}
]

export const employeesTableSortBy = [
   {value: 'id', label: 'Employee ID'},
   {value: 'name', label: 'Name'},
   {value: 'surname', label: 'Surname'},
   {value: 'phone', label: 'Phone'},
   {value: 'email', label: 'Email'},
   {value: 'createdAt', label: 'Created At Date'},
   {value: 'updatedAt', label: 'Updated At Date'},
]