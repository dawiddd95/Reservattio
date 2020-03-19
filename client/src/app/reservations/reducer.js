import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
   loading: false,
   reservations: [],
   isSearching: false,
   searchedReservations: [],
}

const reservationsReducer = (state = INITIAL_STATE, action) => {
   switch(action.type) {
      case types.LOADING_RESERVATIONS: 
         return produce(state, draftState => {
            draftState.loading = action.item
         })

      case types.FETCH_RESERVATIONS: 
         return produce(state, draftState => {
            draftState.reservations = action.item
         })

      case types.ADD_RESERVATION:
         return produce(state, draftState => {
            draftState.reservations = draftState.reservations.concat(action.item)
         })

      case types.EDIT_RESERVATION:
         return produce(state, draftState => {
            draftState.reservations = draftState.reservations.filter(reservation => reservation.id !== action.item.id)
            draftState.reservations = draftState.reservations.concat(action.item)
         })

      case types.DELETE_RESERVATION:
         return produce(state, draftState => {
            draftState.reservations = draftState.reservations.filter(reservation => 
               !action.item.includes(reservation.id))
         })

      case types.IS_SEARCHING_RESERVATIONS:
         return produce(state, draftState => {
            draftState.isSearching = action.item
         })

      case types.SEARCH_RESERVATIONS:
         return produce(state, draftState => {
            draftState.searchedReservations = action.item
         })

      case types.DELETE_SEARCH_RESERVATION:
         return produce(state, draftState => {
            draftState.searchedReservations = draftState.searchedReservations.filter(reservation => 
               !action.item.includes(reservation.id))
         })
       
      default:
         return state;
   }
}

export default reservationsReducer;