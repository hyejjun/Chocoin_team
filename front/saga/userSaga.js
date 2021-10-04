import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import {url} from './url';

function joinAPI(data){
    return axios.post(`${url}/user/join`,data);
};
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

function id_check_API(data){
    return axios.post(`${url}/user/id_check`,data);
}
function* id_check(action){
    let result = yield call(id_check_API,action);
    if(result.data.Id_check == false){
        yield put({
            type:'USER_ID_SUCCESS',
            data:result.data.Id_check,
        })
    }else{
        yield put({
            type:'USER_ID_ERROR',
            data:result.data.Id_check,
        })
    }
}

function* watchUser(){
    yield takeLatest('USER_JOIN_REQUEST',join);
    yield takeLatest('USER_ID_CHECK',id_check);
}

export default function* userSaga(){
    yield all([
        fork(watchUser)
    ])
}