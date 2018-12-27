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

export const actSetFollowingList = (follows) => {
    return {
        type: Types.SET_FOLLOWING_LIST,
        follows
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

export const actPostLoginInfoRequest = (publicKey, privateKey, signature) => {
    return (dispatch) => {
        return apiCall('signIn', 'POST', {
            publicKey: publicKey,
            signature: signature,
          }).then(res => {
              if(res.data.statusCode === 1){
                localStorage.setItem('private', privateKey);
                localStorage.setItem('public', publicKey);
                dispatch(actPostLoginInfo(res.data.value));
              }
              else {
                  alert(res.data.message)
              }
          })
    }
}

export const actSetProfileInfo = (accountInfo) => {
    return {
        type: Types.SET_PROFILE_INFO,
        accountInfo
    }
}

export const actGetProfileInfoRequest = (publicKey) => {
    return (dispatch) => {
        return apiCall(`account/${publicKey}`, 'POST', {
            publicKey: publicKey,
          }).then(res => {
              if(res.data.statusCode === 1){
                localStorage.setItem('public', publicKey);
                dispatch(actSetProfileInfo(res.data.value));
              }
          })
    }
}