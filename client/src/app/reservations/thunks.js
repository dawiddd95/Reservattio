import actions from './actions';

export const fetchedReservationsThunk = (data) => (dispatch) => {
   dispatch(actions.addFetchedReservations(data))
}

export default {
   fetchedReservationsThunk
}