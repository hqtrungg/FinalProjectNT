import { combineReducers } from 'redux';
import account from './account'
import follows from './follows'
import currency from './currency'
import transactions from './transactions'

const appReducers = combineReducers({
    account,
    follows,
    currency,
    transactions
});

export default appReducers;