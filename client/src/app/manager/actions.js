import types from './types';

const loadingManager = item => ({
   type: types.LOADING_MANAGER, item
})

const addFetchedManager = item => ({
   type: types.FETCH_MANAGER, item
})

const editManager = item => ({
   type: types.EDIT_MANAGER, item
})



export default {
   loadingManager,
   addFetchedManager,
   editManager
}
