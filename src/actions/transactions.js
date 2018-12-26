import * as Types from '../constants/ActionTypes';
import apiCall from '../apiCall/apiCall';

export const actFetchTransactionsList = (transactions) => {
    return {
        type: Types.GET_TRANSACTIONS,
        transactions
    }
}

export const actFetchTransactionListRequest = () => {
    return (dispatch) => {
        return apiCall('/:profile/wallet', 'GET', null).then(res => {
            dispatch(actFetchTransactionsList(res.data));
        });
    }
}
