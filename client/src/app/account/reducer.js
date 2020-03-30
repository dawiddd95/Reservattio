import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
   account: {},
}

const accountReducer = (state = INITIAL_STATE, action) => {
   switch(action.type) {
      case types.FETCH_ACCOUNT: 
         return produce(state, draftState => {
            draftState.account = action.item
         })

      case types.EDIT_EMPLOYEE:
         return produce(state, draftState => {
            draftState.account = action.item
         })

      default:
         return state;
   }
}

export default accountReducer;