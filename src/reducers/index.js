import { combineReducers } from 'redux';
import account from './account'
import follows from './follows'

const appReducers = combineReducers({
    account,
    follows
});

export default appReducers;