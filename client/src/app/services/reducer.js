import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
   services: [],
}

const servicesReducer = (state = INITIAL_STATE, action) => {
   switch(action.type) {
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
            draftState.services = draftState.services.filter(service => service.id !== action.item)
         })
       
      default:
         return state;
   }
}

export default servicesReducer;