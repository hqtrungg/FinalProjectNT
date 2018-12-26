import * as Types from '../constants/ActionTypes'

var initialState = {
    name: "Sarah Cruiz",
    job: "Web Programmer",
    avatar: "/images/users/user-1.jpg",
    followers: 100,
    following: 150,
}

const account = (state = initialState, action) => {
    switch(action.type){
        case Types.GET_PROFILE_INFO: 
            state = action.users;
            return [...state];
        default: return state;
    }
};

export default account;