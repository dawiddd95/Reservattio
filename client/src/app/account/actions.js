import types from './types';

const addFetchedAccount = item => ({
   type: types.FETCH_ACCOUNT, item
})

const editAccount = item => ({
   type: types.EDIT_ACCOUNT, item
})


export default {
   addFetchedAccount,
   editAccount
}
