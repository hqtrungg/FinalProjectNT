import * as Types from '../constants/ActionTypes'

var initialState = [
    {
        avatar: '',
        name: 'Sara',
        address: ''
    },
    {
        avatar: '',
        name: 'Sara',
        address: ''
    },
    {
        avatar: '',
        name: 'Sara',
        address: ''
    },
    {
        avatar: '',
        name: 'Sara',
        address: ''
    },
];

const follows = (state = initialState, action) => {
    switch(action.type){
        case Types.GET_FOLLOWING_LIST:
            state = action.profiles;
            return [...state];
        default: return state;
    }
}

export default follows;