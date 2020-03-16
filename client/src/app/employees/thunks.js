import actions from './actions';

export const fetchedEmployeesThunk = (data) => (dispatch) => {
   dispatch(actions.addFetchedEmployees(data))
}

export default {
   fetchedEmployeesThunk
}