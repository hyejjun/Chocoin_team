import {all,fork,takeLatest,call,put,take} from 'redux-saga/effects'
import axios from 'axios'
import {url} from './url'


function* getTradingRecord(){
    const result = yield call(axios.get,`${url}/coin/info`)
    const {data} = result
    if(data.msg==="suc"){
        yield put({
            type:'GET_TRADINGRECORD_SUCCESS',
            data,
        })
    }else{
        yield put({
            type:'GET_TRADINGRECORD_ERROR',
            msg:data.msg
        })
    }
}

function* reqTradingRecord(){
    yield takeLatest('GET_TRADINGRECORD_REQUEST',getTradingRecord)
}


/* get OrderList */

function* getOrderList(){
    const result = yield call(axios.get,`${url}/coin/tradingview`)
    const {data} = result
    if(data.msg==="suc"){
        yield put({
            type:'GET_ORDERLIST_SUCCESS',
            data:data.results,
        })
    }else{
        yield put({
            type:'GET_ORDERLIST_ERROR',
            msg:data.msg
        })
    }
}

function* reqOrderList(){
    yield takeLatest('GET_ORDERLIST_REQUEST',getOrderList)
}

export default function* writeSaga(){
    yield all([
        fork(reqTradingRecord),
        fork(reqOrderList),
    ])
}