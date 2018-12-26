import * as Types from '../constants/ActionTypes'

var initialState = [
    {
        avatar: '',
        name: 'Sara',
        address: '1'
    },
    {
        avatar: '',
        name: 'Sara',
        address: '2'
    },
    {
        avatar: '',
        name: 'Sara',
        address: '3'
    },
    {
        avatar: '',
        name: 'Sara',
        address: '4'
    },
];

const follows = (state = initialState, action) => {
    switch(action.type){
        case Types.GET_FOLLOWING_LIST:
            state = action.follows;
            return [...state];
        case Types.SET_FOLLOWING_LIST:
            state = action.follows;
            return [...state];
        default: return state;
    }
}

export default follows;