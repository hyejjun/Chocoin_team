import {all,fork,takeLatest,call,put, take} from 'redux-saga/effects'
import axios from 'axios'
import {url} from './url'

function MyPageAPI(data) {
    return axios.get(`${url}/user/mypage_get`,data)
}

function* MyPage(action) { 
    const result = yield call(MyPageAPI, action.data)
}

function* reqMyPage() {
    yield takeLatest('MYPAGE_GET_REQUEST', MyPage)    
}

export default function* MyPage(){
    yield all([
        fork(reqMyPage),
    ])
}