import {all,fork,takeLatest,call,put, take} from 'redux-saga/effects'
import axios from 'axios'
import { url } from './url'
function MyPageAPI(data) {
    return axios.get(`${url}/user/mypage`,data)
}

function* MyPage(action) { 
    const result = yield call(MyPageAPI, action.data)
    
    const { data } = result
    console.log(data);

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

function* reqMyPage() {
    yield takeLatest('EXCHANGE_INSERT_REQUEST', MyPage)    
}

export default function* MyPage(){
    yield all([
        fork(reqMyPage),
    ])
}