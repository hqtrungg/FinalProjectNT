import * as Types from '../constants/ActionTypes';
import apiCall from '../apiCall/apiCall'

export const actFetchFollowerList = (profiles) => {
    return {
        type: Types.GET_FOLLOWERS_LIST,
        profiles
    }
}

export const actFetchFollowerListRequest = () => {
    return (dispatch) => {
        return apiCall('/:profile/followers', 'GET', null).then(res => {
            dispatch(actFetchFollowerList(res.data));
        });
    }
}

export const actFetchFollowingList = (profiles) => {
    return {
        type: Types.GET_FOLLOWING_LIST,
        profiles
    }
}

export const actFetchFollowingListRequest = () => {
    return (dispatch) => {
        return apiCall('/:profile/following', 'GET', null).then(res => {
            dispatch(actFetchFollowerList(res.data));
        });
    }
}

export const actFetchProfileInfo = (user) => {
    return {
        type: Types.GET_PROFILE_INFO,
        user
    }
}

export const actFetchUserListRequest = () => {
    return (dispatch) => {
        return apiCall('/:profile', 'GET', null).then(res => {
            dispatch(actFetchProfileInfo(res.data));
        });
    }
}

export const actFetchProfileUpdate = (user) => {
    return {
        type: Types.UPDATE_PROFILE,
        user
    }
}

export const actFetchProfileUpdateRequest = () => {
    return (dispatch) => {
        return apiCall('/:profile/edit', 'GET', null).then(res => {
            dispatch(actFetchProfileUpdate(res.data));
        })
    }
}
