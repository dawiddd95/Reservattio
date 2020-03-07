import { combineReducers } from 'redux';

import servicesReducer from './app/services'; 

const appReducer = combineReducers({
   servicesReducer,
})

// reset redux store
const rootReducer = (state, action) => {
   if(action.type === 'RESET_STORE') state = undefined;
   return appReducer(state, action);
}

export default rootReducer;