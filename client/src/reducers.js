import { combineReducers } from 'redux';

import accountReducer from './app/account'
import servicesReducer from './app/services'; 
import clientsReducer from './app/clients';
import employeesReducer from './app/employees';
import reservationsReducer from './app/reservations';

const appReducer = combineReducers({
   accountReducer,
   servicesReducer,
   clientsReducer,
   employeesReducer,
   reservationsReducer
})

// reset redux store
const rootReducer = (state, action) => {
   if(action.type === 'RESET_STORE') state = undefined;
   return appReducer(state, action);
}

export default rootReducer;