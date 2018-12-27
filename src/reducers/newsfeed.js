import * as Types from '../constants/ActionTypes'

var initialState = {
    newsfeeds: [],
        
}

const newsfeed = (state = initialState, action) => {
    switch(action.type){
        case Types.GET_NEWSFEED_INFO: 
            return [...state];
        case Types.SET_NEWSFEED_INFO:
            //state = action.accountInfo;
            return {
                ...state,
                newsfeeds: action.newsfeeds
            }
        default: return state;
    }
};

export default newsfeed;