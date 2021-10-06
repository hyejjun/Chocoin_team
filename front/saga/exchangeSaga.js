import {all,fork,takeLatest,call,put, take} from 'redux-saga/effects'
import axios from 'axios'
import { url } from './url'

function exchangeAPI(data) {
    return axios.post(`${url}/coin/order`,data)
}

function* exchange(action) {
    const result = yield call(exchangeAPI, action.data)

    
    const { data } = result

    // if (data.result === 'OK') {
    //     yield put({
    //         type: 'EXCHANGE_INSERT_SUCCESS',
    //         data: data.msg
    //     })
    // } else {
    //     yield put({
    //         type: 'EXCHANGE_INSERT_ERROR',
    //         data: data.msg
    //     })
    // }
}

function* reqExchange() {
    yield takeLatest('EXCHANGE_INSERT_REQUEST', exchange)    
}

export default function* exchangeSaga(){
    yield all([
        fork(reqExchange),
    ])
}