import types from './types';

const addFetchedServices = item => ({
   type: types.FETCH_SERVICES, item
})

const addService = item => ({
   type: types.ADD_SERVICE, item
})

const editService = item => ({
   type: types.EDIT_SERVICE, item
})

const deleteService = item => ({
   type: types.DELETE_SERVICE, item
})

export default {
   addFetchedServices,
   addService,
   editService,
   deleteService
}
