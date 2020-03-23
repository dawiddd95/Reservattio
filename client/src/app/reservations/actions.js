import types from './types';

const loadingReservations = item => ({
   type: types.LOADING_RESERVATIONS, item
})

const addFetchedReservations = item => ({
   type: types.FETCH_RESERVATIONS, item
})

const addReservation = item => ({
   type: types.ADD_RESERVATION, item
})

const editReservation = item => ({
   type: types.EDIT_RESERVATION, item
})

const deleteReservation = item => ({
   type: types.DELETE_RESERVATION, item
})

const isSearchingReservations = item => ({
   type: types.IS_SEARCHING_RESERVATIONS, item
})

const searchReservations = item => ({
   type: types.SEARCH_RESERVATIONS, item
})

const deleteSearchReservation = item => ({
   type: types.DELETE_SEARCH_RESERVATION, item
})

const editSearchReservation = item => ({
   type: types.EDIT_SEARCH_RESERVATION, item
})


export default {
   loadingReservations,
   addFetchedReservations,
   addReservation,
   editReservation,
   deleteReservation,
   isSearchingReservations,
   searchReservations,
   deleteSearchReservation,
   editSearchReservation
}
