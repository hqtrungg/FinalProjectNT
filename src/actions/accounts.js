import * as Types from '../constants/ActionTypes';
import apiCall from '../apiCall/apiCall'

export const actFetchFollowingList = (follows) => {
    return {
        type: Types.GET_FOLLOWING_LIST,
        follows
    }
}

export const actFetchFollowingListRequest = () => {
    return (dispatch) => {
        return apiCall('/follow', 'GET', null).then(res => {
            dispatch(actFetchFollowingList(res.data));
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

export const actPostLoginInfo = (accountInfo) => {
    return {
        type: Types.POST_LOGIN_INFO,
        accountInfo
    }
}

export const actPostLoginInfoRequest = (publicKey, signature) => {
    return (dispatch) => {
        return apiCall('/signin', 'POST', {
            publicKey: publicKey,
            signature: signature,
          }).then(res => {
              dispatch(actPostLoginInfo(res.data));
          })
    }
}
