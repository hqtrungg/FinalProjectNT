import * as Types from '../constants/ActionTypes'

var initialState = [];

const currency = (state = initialState, action) => {
    switch(action.type){
        case Types.GET_BALANCE: 
            return [...state];
        case Types.GET_ENERGY:
            return [...state];
        default: return [...state];
    }
}

export default currency;