import * as Types from '../constants/ActionTypes';
import apiCall from '../apiCall/apiCall'

export const actFetchFollowerList = (users) => {
    return {
        type: Types.GET_FOLLOWERS_LIST,
        users
    }
}

export const actFetchFollowerListRequest = () => {
    return (dispatch) => {
        return apiCall('/:profile/followers', 'GET', null).then(res => {
            dispatch(actFetchFollowerList(res.data));
        });
    }
}

export const actFetchFollowingList = (users) => {
    return {
        type: Types.GET_FOLLOWING_LIST,
        users
    }
}

export const actFetchFollowingListRequest = () => {
    return (dispatch) => {
        return apiCall('/:profile/following', 'GET', null).then(res => {
            dispatch(actFetchFollowerList(res.data));
        });
    }
}

export const actFetchProfileInfo = (users) => {
    return {
        type: Types.GET_PROFILE_INFO,
        users
    }
}

export const actFetchUserListRequest = () => {
    return (dispatch) => {
        return apiCall('/:profile', 'GET', null).then(res => {
            dispatch(actFetchProfileInfo(res.data));
        });
    }
}