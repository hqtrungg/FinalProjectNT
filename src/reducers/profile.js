import * as Types from '../constants/ActionTypes'

var initialState = {
    profiles: [],
        
}

const profiles = (state = initialState, action) => {
    switch(action.type){
        case Types.GET_PROFILE_INFO: 
            return [...state];
        case Types.SET_PROFILE_INFO:
            //state = action.accountInfo;
            return {
                ...state,
                profiles: action.profiles
            }
        default: return state;
    }
};

export default profiles;