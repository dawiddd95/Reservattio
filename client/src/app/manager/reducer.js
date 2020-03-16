import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
   loading: false,
   manager: {},
}

const managerReducer = (state = INITIAL_STATE, action) => {
   switch(action.type) {
      case types.LOADING_MANAGER: 
         return produce(state, draftState => {
            draftState.loading = action.item
         })

      case types.FETCH_MANAGER: 
         return produce(state, draftState => {
            draftState.manager = action.item
         })

      case types.EDIT_MANAGER:
         return produce(state, draftState => {
            draftState.manager = action.item
         })

      default:
         return state;
   }
}

export default managerReducer;