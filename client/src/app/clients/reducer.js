import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
   loading: false,
   clients: [],
   isSearching: false,
   searchedClients: [],
}

const clientsReducer = (state = INITIAL_STATE, action) => {
   switch(action.type) {
      case types.LOADING_CLIENTS: 
         return produce(state, draftState => {
            draftState.loading = action.item
         })

      case types.FETCH_CLIENTS: 
         return produce(state, draftState => {
            draftState.clients = action.item
         })

      case types.ADD_CLIENT:
         return produce(state, draftState => {
            draftState.clients = draftState.clients.concat(action.item)
         })

      case types.EDIT_CLIENT:
         return produce(state, draftState => {
            draftState.clients = draftState.clients.filter(client => client.id !== action.item.id)
            draftState.clients = draftState.clients.concat(action.item)
         })

      case types.DELETE_CLIENT:
         return produce(state, draftState => {
            draftState.clients = draftState.clients.filter(client => !action.item.includes(client.id))
         })

      case types.IS_SEARCHING_CLIENTS:
         return produce(state, draftState => {
            draftState.isSearching = action.item
         })

      case types.SEARCH_CLIENTS:
         return produce(state, draftState => {
            draftState.searchedClients = action.item
         })

      case types.DELETE_SEARCH_CLIENT:
         return produce(state, draftState => {
            draftState.searchedClients = draftState.searchedClients.filter(client => !action.item.includes(client.id))
         })

      case types.EDIT_SEARCH_CLIENT:
         return produce(state, draftState => {
            draftState.searchedClients = draftState.searchedClients.filter(client => client.id !== action.item.id)
            draftState.searchedClients = draftState.searchedClients.concat(action.item)
         })

      case types.IMPORT_CLIENTS:
         return produce(state, draftState => {
            draftState.clients = draftState.clients.concat(action.item)
         })
       
      default:
         return state;
   }
}

export default clientsReducer;