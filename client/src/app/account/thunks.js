import actions from './actions';

export const fetchedAccountThunk = (data) => (dispatch) => {
   dispatch(actions.addFetchedAccount(data))
}

export default {
   fetchedAccountThunk
}