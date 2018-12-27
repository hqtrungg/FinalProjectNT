import * as Types from '../constants/ActionTypes'

var initialState = {
    accountInfo: {
        address: '',
        balance: 0,
        sequence: 0,
        bandwidth: 0,
        bandwidthTime: '2018-12-27T01:50:40.146886796Z',
        txSize: 0,
        name: "Sarah Cruiz",
        avatar: "/images/users/user-1.jpg",
        followings: 150,
        loged: false
    },
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

            //state = action.accountInfo;
            return {
                ...state,
                accountInfo: action.accountInfo
            }
        default: return state;
    }
};

export default account;