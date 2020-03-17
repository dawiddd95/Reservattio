import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
   loading: false,
   employees: [],
   isSearching: false,
   searchedEmployees: [],
}

const employeesReducer = (state = INITIAL_STATE, action) => {
   switch(action.type) {
      case types.LOADING_EMPLOYEES: 
         return produce(state, draftState => {
            draftState.loading = action.item
         })

      case types.FETCH_EMPLOYEES: 
         return produce(state, draftState => {
            draftState.employees = action.item
         })

      case types.ADD_EMPLOYEE:
         return produce(state, draftState => {
            draftState.employees = draftState.employees.concat(action.item)
         })

      case types.EDIT_EMPLOYEE:
         return produce(state, draftState => {
            draftState.employees = draftState.employees.filter(employee => employee.id !== action.item.id)
            draftState.employees = draftState.employees.concat(action.item)
         })

      case types.DELETE_EMPLOYEE:
         return produce(state, draftState => {
            draftState.employees = draftState.employees.filter(employee => !action.item.includes(employee.id))
         })

      case types.IS_SEARCHING_EMPLOYEES:
         return produce(state, draftState => {
            draftState.isSearching = action.item
         })

      case types.SEARCH_EMPLOYEES:
         return produce(state, draftState => {
            draftState.searchedEmployees = action.item
         })

      case types.DELETE_SEARCH_EMPLOYEE:
         return produce(state, draftState => {
            draftState.searchedEmployees = draftState.searchedEmployees.filter(employee => !action.item.includes(employee.id))
         })
       
      default:
         return state;
   }
}

export default employeesReducer;