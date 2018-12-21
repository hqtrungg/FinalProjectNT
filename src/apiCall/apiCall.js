import axios from 'axios';
import * as Config from '../constants/Url'

export default function apiCall (endpoint, method = 'GET', body){
    return axios({
        method: method,
        url: `${Config.URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
}