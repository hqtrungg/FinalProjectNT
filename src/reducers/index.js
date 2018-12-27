import { combineReducers } from 'redux';
import account from './account'
import follows from './follows'
import currency from './currency'
import transactions from './transactions'
import newsfeed from './newsfeed'
import profile from './profile'

const appReducers = combineReducers({
    account,
    follows,
    currency,
    transactions,
    newsfeed,
    profile
});

export default appReducers;