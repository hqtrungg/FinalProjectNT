import * as Types from '../constants/ActionTypes'

var initialState = [];

const transactions = (state = initialState, action) => {
    switch(action.type) {
        case Types.GET_TRANSACTIONS:
            state = action.transactions;
            return [...state];
        default: return [...state];
    }
}

export default transactions;