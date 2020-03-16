import { combineReducers } from 'redux';

import managerReducer from './app/manager';
import servicesReducer from './app/services'; 
import clientsReducer from './app/clients';
import employeeReducer from './app/employees';

const appReducer = combineReducers({
   managerReducer,
   servicesReducer,
   clientsReducer,
   employeeReducer
})

// reset redux store
const rootReducer = (state, action) => {
   if(action.type === 'RESET_STORE') state = undefined;
   return appReducer(state, action);
}

export default rootReducer;