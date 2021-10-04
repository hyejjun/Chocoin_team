import {all,fork,takeLatest,call,put, take} from 'redux-saga/effects'
import axios from 'axios'
<<<<<<< HEAD
import { url } from './url'
=======
import {url} from './url'

>>>>>>> c8742d96aacfb76bbd91720b4f03cb1235ef78fc
function MyPageAPI(data) {
    return axios.get(`${url}/user/mypage`,data)
}

function* MyPage(action) { 
    const result = yield call(MyPageAPI, action.data)
    
    const { data } = result
    console.log(data);

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

export default function* MyPage(){
    yield all([
        fork(reqMyPage),
    ])
}