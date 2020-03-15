import types from './types';

const loadingClients = item => ({
   type: types.LOADING_CLIENTS, item
})

const addFetchedClients = item => ({
   type: types.FETCH_CLIENTS, item
})

const addClient = item => ({
   type: types.ADD_CLIENT, item
})

const editClient = item => ({
   type: types.EDIT_CLIENT, item
})

const deleteClient = item => ({
   type: types.DELETE_CLIENT, item
})

const isSearchingClients = item => ({
   type: types.IS_SEARCHING_CLIENTS, item
})

const searchClients = item => ({
   type: types.SEARCH_CLIENTS, item
})

const deleteSearchClient = item => ({
   type: types.DELETE_SEARCH_CLIENT, item
})

const importClients = item => ({
   type: types.IMPORT_CLIENTS, item
})

export default {
   loadingClients,
   addFetchedClients,
   addClient,
   editClient,
   deleteClient,
   isSearchingClients,
   searchClients,
   deleteSearchClient,
   importClients
}
