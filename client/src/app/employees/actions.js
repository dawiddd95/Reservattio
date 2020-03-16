import types from './types';

const loadingEmployees = item => ({
   type: types.LOADING_EMPLOYEES, item
})

const addFetchedEmployees = item => ({
   type: types.FETCH_EMPLOYEES, item
})

const addEmployee = item => ({
   type: types.ADD_EMPLOYEE, item
})

const editEmployee = item => ({
   type: types.EDIT_EMPLOYEE, item
})

const deleteEmployee = item => ({
   type: types.DELETE_EMPLOYEE, item
})

const isSearchingEmployees = item => ({
   type: types.IS_SEARCHING_EMPLOYEES, item
})

const searchEmployees = item => ({
   type: types.SEARCH_EMPLOYEES, item
})

const deleteSearchEmployee = item => ({
   type: types.DELETE_SEARCH_EMPLOYEE, item
})

export default {
   loadingEmployees,
   addFetchedEmployees,
   addEmployee,
   editEmployee,
   deleteEmployee,
   isSearchingEmployees,
   searchEmployees,
   deleteSearchEmployee
}
