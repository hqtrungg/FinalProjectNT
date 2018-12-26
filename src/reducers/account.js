import * as Types from '../constants/ActionTypes'

var initialState = {
    name: "Sarah Cruiz",
    avatar: "/images/users/user-1.jpg",
    following: 150,
}

const account = (state = initialState, action) => {
    switch(action.type){
        case Types.GET_PROFILE_INFO: 
            state = action.user;
            return [...state];
        case Types.UPDATE_PROFILE:
            state = action.user;
            return [...state];
        case Types.POST_LOGIN_INFO:
            state = action.accountInfo;
            return [...state];
        default: return state;
    }
};

export default account;