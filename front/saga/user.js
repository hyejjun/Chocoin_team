import axios from "axios"
import { takeLatest, call, put } from "redux-saga/effects"

function joinAPI(data){
    return axios.post(`${url}/user/join`,data);
}
function* join(action){
    let result = yield call(joinAPI,action.data);
    let {data} = result;
    if(data !== null){
        yield put({
            type:'USER_JOIN_SUCCESS',
            data:'OK',
            user_info:data
        })
    }else{
        yield put({
            type:'USER_JOIN_ERROR',
            data:'아이디와 비밀번호를 확인해주세요'
        })
    }
}

function* watchUser(){
    yield takeLatest('USER_JOIN_REQUEST',join)
}

export default function* userSaga(){
    yield all([
        fork(watchUser)
    ])
}