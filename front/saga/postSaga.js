import {all,fork,takeLatest,call,put, take} from 'redux-saga/effects'
import axios from 'axios'
import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL,
    GET_POSTS_DETAIL_REQUEST,
    GET_POSTS_DETAIL_SUCCESS,
    GET_POSTS_DETAIL_FAIL
} from '../reducers/post'

let BaseURL = process.env.NODE_ENV.backurl || 'https://jsonplaceholder.typicode.com'

async function getPostAPI(data = "") {
    const response = await axios.get(`${BaseURL}/posts/${data}`)
    return response
}
/* 전체 post 가져옴 */
function* getPosts(){
    // API 통신 web server랑 통신을 하게될겁니다. fetch axios 
    try{
        const {data} = yield call(getPostAPI)
        //console.log(data);
        yield put({
            type:GET_POSTS_SUCCESS,
            data
        })
    } catch (e) {
        yield put({
            type:GET_POSTS_FAIL,
            data:'ERROR'
        })
    }
}

function* watchPosts(){
    yield takeLatest(GET_POSTS_REQUEST,getPosts)
}


/* 디테일 */
function* getPostDetail (action) {
    try {
        const {data} = yield call(getPostAPI,action.data)
        yield put({
            type : GET_POSTS_DETAIL_SUCCESS,
            data
        })
    } catch (e) {
        yield put({
            type:GET_POSTS_DETAIL_FAIL,
            data:'ERROR'
        })
    }
}
function* watchPostDetail(){
    yield takeLatest(GET_POSTS_DETAIL_REQUEST,getPostDetail)
}

export default function* postSaga(){
    yield all([
        fork(watchPosts),
        fork(watchPostDetail)
    ])
}