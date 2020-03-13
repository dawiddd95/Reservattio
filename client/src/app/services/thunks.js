import actions from './actions';

export const fetchedServicesThunk = (data) => (dispatch) => {
   dispatch(actions.addFetchedServices(data))
}

export default {
   fetchedServicesThunk
}