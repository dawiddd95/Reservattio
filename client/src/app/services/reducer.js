import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
   loading: false,
   services: [],
   isSearching: false,
   searchedServices: [],
}

const servicesReducer = (state = INITIAL_STATE, action) => {
   switch(action.type) {
      case types.LOADING_SERVICES: 
         return produce(state, draftState => {
            draftState.loading = action.item
         })

      case types.FETCH_SERVICES: 
         return produce(state, draftState => {
            draftState.services = action.item
         })

      case types.ADD_SERVICE:
         return produce(state, draftState => {
            draftState.services = draftState.services.concat(action.item)
         })

      case types.EDIT_SERVICE:
         return produce(state, draftState => {
            draftState.services = draftState.services.filter(service => service.id !== action.item.id)
            draftState.services = draftState.services.concat(action.item)
         })

      case types.DELETE_SERVICE:
         return produce(state, draftState => {
            draftState.services = draftState.services.filter(service => !action.item.includes(service.id))
         })

      case types.IS_SEARCHING_SERVICES:
         return produce(state, draftState => {
            draftState.isSearching = action.item
         })

      case types.SEARCH_SERVICES:
         return produce(state, draftState => {
            draftState.searchedServices = action.item
         })

      case types.DELETE_SEARCH_SERVICE:
         return produce(state, draftState => {
            draftState.searchedServices = draftState.searchedServices.filter(service => !action.item.includes(service.id))
         })
       
      default:
         return state;
   }
}

export default servicesReducer;