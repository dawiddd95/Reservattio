import actions from './actions';

export const fetchedEmployeesThunk = (data) => (dispatch) => {
   const filterData = data.filter(data => data.type !== 'manager')
   dispatch(actions.addFetchedEmployees(filterData))
}

export default {
   fetchedEmployeesThunk
}