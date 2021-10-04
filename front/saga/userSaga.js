import axios from "axios";
import { takeLatest, call, put, all, fork } from "redux-saga/effects";
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

function loginAPI(data){
    return axios.post(`${url}/user/login`,data,{withCredentials:true});
}
function* login(action){
    let result = yield call(loginAPI,action.data);
    let {data} = result;
    if(data.results !== undefined){
        yield put({
            type:'USER_LOGIN_SUCCESS',
            data:'OK',
            // user_info:data.results
        })
    }else{
        yield put({
            type:'USER_LOGIN_ERROR',
            data:'아이디와 비밀번호를 확인해주세요'
        })
    }
}

function cookieAPI(){
    return axios.get(`http://localhost:3000`,{withCredentials:true});
}
function* cookie_check(action){
    let result = yield call(cookieAPI,action);
    let {data} = result;
    
    if(data.cookie === 'success'){
        yield put({
            type:'USER_COOKIE_SUCCESS',
            data:data.cookie,
        })
    }else{
        yield put({
            type:'USER_COOKIE_ERROR',
            data:data.cookie,
        })
    }
}

function* watchUser(){
    yield takeLatest('USER_JOIN_REQUEST',join);
    yield takeLatest('USER_ID_CHECK',id_check);
    yield takeLatest('USER_LOGIN_REQUEST',login);
    yield takeLatest('USER_COOKIE_CHECK',cookie_check);
}

export default function* userSaga(){
    yield all([
        fork(watchUser)
    ])
}