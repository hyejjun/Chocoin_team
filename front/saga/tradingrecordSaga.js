import {all,fork,takeLatest,call,put,take} from 'redux-saga/effects'
import axios from 'axios'
import {url} from './url'


function* getTradingRecord(){
    const result = yield call(axios.get,`${url}/coin/info`)
    const {data} = result
    if(data.msg==="suc"){
        console.log('suc')
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

export default function* writeSaga(){
    yield all([
        fork(reqTradingRecord),
    ])
}