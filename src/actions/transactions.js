import * as Types from '../constants/ActionTypes';
import apiCall from '../apiCall/apiCall';

export const actPostTransaction = (transactions) => {
    return {
        type: Types.GET_TRANSACTIONS,
        transactions,
    }
}
export const actPostTransactionRequest = (transactions) => {
    return () => {
        return (apiCall('/transactions', 'POST', {txs:transactions})).then(res => {
            alert("Success")
        }).catch(err => {alert(err.data.value.message)});
    }
}
