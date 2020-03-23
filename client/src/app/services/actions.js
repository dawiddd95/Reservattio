import types from './types';

const loadingServices = item => ({
   type: types.LOADING_SERVICES, item
})

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

const isSearchingServices = item => ({
   type: types.IS_SEARCHING_SERVICES, item
})

const searchServices = item => ({
   type: types.SEARCH_SERVICES, item
})

const deleteSearchService = item => ({
   type: types.DELETE_SEARCH_SERVICE, item
})

const editSearchService = item => ({
   type: types.EDIT_SEARCH_SERVICE, item
})

export default {
   loadingServices,
   addFetchedServices,
   addService,
   editService,
   deleteService,
   isSearchingServices,
   searchServices,
   deleteSearchService,
   editSearchService
}
