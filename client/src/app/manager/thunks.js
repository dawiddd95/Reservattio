import actions from './actions';

export const fetchedManagerThunk = (data) => (dispatch) => {
   const filterData = data.filter(data => data.type === 'manager')
   dispatch(actions.addFetchedManager(filterData))
}

export default {
   fetchedManagerThunk
}