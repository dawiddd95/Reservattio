import actions from './actions';

export const fetchedManagerThunk = (data) => (dispatch) => {
   dispatch(actions.addFetchedManager(data))
}

export default {
   fetchedManagerThunk
}