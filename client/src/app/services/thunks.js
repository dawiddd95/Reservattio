import actions from './actions';

const fetchedServicesThunk = (data) => (dispatch) => {
   dispatch(actions.addFetchedServices(data))
}

export default {
   fetchedServicesThunk
}