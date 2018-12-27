import * as Types from '../constants/ActionTypes';
import apiCall from '../apiCall/apiCall'


export const actGetAllNewsFeedRequest = () => {
    return(dispatch) => {
        return apiCall('tweet', 'GET', null).then(res => {
            dispatch(actSetNewsFeed(res.data.value.tweets))
        })
    }
}

export const actSetNewsFeed = (newsfeeds) => {
    return {
        type: Types.SET_NEWSFEED_INFO,
        newsfeeds
    }
}