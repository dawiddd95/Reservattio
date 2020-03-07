import types from './types';

const addFetchedServices = item => ({
   type: types.FETCH_SERVICES, item
})

const addService = item => ({
   type: types.ADD_SERVICE, item
})

export default {
   addFetchedServices,
   addService
}
