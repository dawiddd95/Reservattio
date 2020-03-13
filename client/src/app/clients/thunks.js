import actions from './actions';

export const fetchedClientsThunk = (data) => (dispatch) => {
   dispatch(actions.addFetchedClients(data))
}

export default {
   fetchedClientsThunk
}