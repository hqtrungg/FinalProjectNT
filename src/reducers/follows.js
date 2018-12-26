import * as Types from '../constants/ActionTypes'

var initialState = [
    {
        avatar: '',
        name: 'Sara',
    },
    {
        avatar: '',
        name: 'Sara',
    },
    {
        avatar: '',
        name: 'Sara',
    },
    {
        avatar: '',
        name: 'Sara',
    },
];

const follows = (state = initialState, action) => {
    switch(action.type){
        case Types.GET_FOLLOWERS_LIST:
            state = action.profiles;
            return [...state];
        case Types.GET_FOLLOWING_LIST:
            state = action.profiles;
            return [...state];
        default: return state;
    }
}

export default follows;