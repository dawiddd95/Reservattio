import React from 'react';
import ReservationDetailsPage from '../../pages/ReservationDetailsPage/ReservationDetailsPage';


const useFetch = () => {
   
}

const fakeReservation = [
   {
      id: 1, 
      client: {
         id: 1939357,
         name: 'Mariusz',
         surname: 'Kielas',
         phone: '713 678 123'
      }, 
      date: ['2020-03-03', '2020-03-03'],
      startTime: '13:00',
      endTime: '14:00',
      employee: {
         id: 1269433,
         name: 'Justyna',
         surname: 'Jabłońska',
         type: 'Employee'
      },
      service: {
         id: 62836,
         name: 'Fizjoterapia'
      },
      room: '',
      status: 'Cancelled', //values: ['Reserved', 'In Progress', 'Cancelled', 'Completed']
      note: 'No one becomes a success without a little help from their friends. Over the course of your career, you’ll get a lot of assistance from your personal and professional network, especially when you’re going through a job search.',
      cancellationNote: '',
      createdAt: '2020-03-04',
      updatedAt: '2020-03-04'
   }
]

const FetchReservation = () => {
   return (
      <ReservationDetailsPage
         reservation={fakeReservation[0]}
      />
   )
}
 
export default FetchReservation;