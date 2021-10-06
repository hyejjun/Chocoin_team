import {all,fork,takeLatest,call,put, take} from 'redux-saga/effects'
import axios from 'axios'
import {url} from './url'

function MyPageAPI() {
    return axios.post(`${url}/user/mypage`,{userid : 'web11'})
}

function MyPageAPI2() {
    return axios.post(`${url}/user/mypage2`,{userid : 'web11'})
}

function* MyPage(action) { 
    const result = yield call(MyPageAPI, action.data)
    const result2 = yield call(MyPageAPI2, action.data2)
    
    const { data } = result
    const data2 = result2.data


    if (data.msg && data2.msg === 'suc') {
        yield put({
            type: 'MYPAGE_GET_SUCCESS',
            data: data.results,
            data2 : data2.results
        })
    } else {
        yield put({
            type: 'MYPAGE_GET_ERROR',
            data: data.msg,
            data2 : data2.msg
        })
    }
}

function* reqMyPage() {
    yield takeLatest('MYPAGE_GET_REQUEST', MyPage)    
}

export default function* MyPageSaga(){
    yield all([
        fork(reqMyPage),
    ])
}