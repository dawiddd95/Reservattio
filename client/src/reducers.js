import { combineReducers } from 'redux';

import servicesReducer from './app/services'; 
import clientsReducer from './app/clients';

const appReducer = combineReducers({
   servicesReducer,
   clientsReducer,
})

// reset redux store
const rootReducer = (state, action) => {
   if(action.type === 'RESET_STORE') state = undefined;
   return appReducer(state, action);
}

export default rootReducer;