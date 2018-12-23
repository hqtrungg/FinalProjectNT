import * as Types from '../constants/ActionTypes'

var initialState = [
    
];

const follows = (state = initialState, action) => {
    switch(action.type){
        case Types.GET_FOLLOWERS_LIST:
            return [...state];
        case Types.GET_FOLLOWING_LIST:
            return [...state];
        default: return state;
    }
}

export default follows;