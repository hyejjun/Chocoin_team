import {all,fork,takeLatest,call,put, take} from 'redux-saga/effects'
import axios from 'axios'
import {url} from './url'

function MyPageAPI() {
    return axios.get(`${url}/user/mypage`)
}

function* MyPage(action) { 
    const result = yield call(MyPageAPI, action.data)
    
    const { data } = result
    console.log(result);

    // if (data.result === 'OK') {
    //     yield put({
    //         type: 'MYPAGE_GET_SUCCESS',
    //         data: data.msg
    //     })
    // } else {
    //     yield put({
    //         type: 'MYPAGE_GET_ERROR',
    //         data: data.msg
    //     })
    // }
}

function* reqMyPage() {
    yield takeLatest('MYPAGE_GET_REQUEST', MyPage)    
}

export default function* MyPageSaga(){
    yield all([
        fork(reqMyPage),
    ])
}